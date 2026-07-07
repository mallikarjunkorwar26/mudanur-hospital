import express from "express";
import Appointment from "../models/Appointment.js";
import {
  generateAppointmentId,
  STATUSES,
  syncAppointmentsExcel,
  validateAppointmentPayload,
  writeAppointmentsExcel,
  writeAppointmentsPdf,
} from "../utils/appointments.js";
import { requireAdmin } from "../utils/auth.js";

const router = express.Router();

async function refreshExcel(recordsDir) {
  const appointments = await Appointment.find().sort({ bookingDate: -1 }).lean();
  syncAppointmentsExcel(appointments, recordsDir);
}

router.post("/", async (req, res, next) => {
  try {
    const errors = validateAppointmentPayload(req.body);
    if (Object.keys(errors).length) {
      return res.status(400).json({ message: "Validation failed", errors });
    }

    const appointment = await Appointment.create({
      appointmentId: await generateAppointmentId(),
      patientName: req.body.patientName.trim(),
      mobileNumber: req.body.mobileNumber.trim(),
      email: req.body.email?.trim() || "",
      age: Number(req.body.age),
      gender: req.body.gender,
      preferredDate: req.body.preferredDate,
      preferredTime: req.body.preferredTime,
      reasonForVisit: req.body.reasonForVisit.trim(),
      additionalMessage: req.body.additionalMessage?.trim() || "",
      status: "Pending",
      bookingDate: new Date(),
    });

    await refreshExcel(req.app.locals.recordsDir);

    res.status(201).json({ appointment });
  } catch (error) {
    next(error);
  }
});

router.get("/", requireAdmin, async (req, res, next) => {
  try {
    const search = String(req.query.search || "").trim();
    const filter = search
      ? {
          $or: [
            { appointmentId: { $regex: search, $options: "i" } },
            { patientName: { $regex: search, $options: "i" } },
            { mobileNumber: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const appointments = await Appointment.find(filter)
      .sort({ bookingDate: -1 })
      .limit(500)
      .lean();

    res.json({ appointments });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/status", requireAdmin, async (req, res, next) => {
  try {
    if (!STATUSES.includes(req.body.status)) {
      return res.status(400).json({ message: "Invalid appointment status" });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    await refreshExcel(req.app.locals.recordsDir);

    res.json({ appointment });
  } catch (error) {
    next(error);
  }
});

router.get("/export/excel", requireAdmin, async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort({ bookingDate: -1 }).lean();
    writeAppointmentsExcel(res, appointments);
  } catch (error) {
    next(error);
  }
});

router.get("/export/pdf", requireAdmin, async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort({ bookingDate: -1 }).lean();
    writeAppointmentsPdf(res, appointments);
  } catch (error) {
    next(error);
  }
});

export default router;
