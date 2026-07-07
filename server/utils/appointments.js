import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import XLSX from "xlsx";
import Counter from "../models/Counter.js";

export const STATUSES = ["Pending", "Confirmed", "Completed", "Cancelled"];

export function formatDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

export async function generateAppointmentId() {
  const dateKey = formatDateKey();
  const counter = await Counter.findOneAndUpdate(
    { key: `appointment-${dateKey}` },
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  return `MH-${dateKey}-${String(counter.seq).padStart(4, "0")}`;
}

export function validateAppointmentPayload(payload) {
  const errors = {};
  const required = [
    ["patientName", "Full Name is required"],
    ["mobileNumber", "Mobile Number is required"],
    ["age", "Age is required"],
    ["gender", "Gender is required"],
    ["preferredDate", "Preferred Appointment Date is required"],
    ["preferredTime", "Preferred Appointment Time is required"],
    ["reasonForVisit", "Reason for Visit / Symptoms is required"],
  ];

  required.forEach(([field, message]) => {
    if (!String(payload[field] ?? "").trim()) errors[field] = message;
  });

  if (payload.mobileNumber && !/^[6-9]\d{9}$/.test(String(payload.mobileNumber).trim())) {
    errors.mobileNumber = "Enter a valid 10 digit Indian mobile number";
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email).trim())) {
    errors.email = "Enter a valid email address";
  }

  const age = Number(payload.age);
  if (payload.age && (!Number.isFinite(age) || age < 1 || age > 130)) {
    errors.age = "Enter a valid age";
  }

  if (payload.gender && !["Male", "Female", "Other"].includes(payload.gender)) {
    errors.gender = "Choose a valid gender";
  }

  return errors;
}

export function toExcelRow(appointment) {
  return {
    "Appointment ID": appointment.appointmentId,
    "Booking Date": new Date(appointment.bookingDate).toLocaleString("en-IN"),
    "Patient Name": appointment.patientName,
    "Mobile Number": appointment.mobileNumber,
    Email: appointment.email || "",
    Age: appointment.age,
    Gender: appointment.gender,
    "Preferred Date": appointment.preferredDate,
    "Preferred Time": appointment.preferredTime,
    "Reason for Visit": appointment.reasonForVisit,
    "Additional Message": appointment.additionalMessage || "",
    Status: appointment.status,
  };
}

export function syncAppointmentsExcel(appointments, recordsDir) {
  fs.mkdirSync(recordsDir, { recursive: true });
  const rows = appointments.map(toExcelRow);
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Appointments");
  const filePath = path.join(recordsDir, "appointments.xlsx");
  XLSX.writeFile(workbook, filePath);
  return filePath;
}

export function writeAppointmentsExcel(res, appointments) {
  const rows = appointments.map(toExcelRow);
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Appointments");
  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  res.setHeader(
    "Content-Disposition",
    'attachment; filename="mudanur-appointments.xlsx"'
  );
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.send(buffer);
}

export function writeAppointmentsPdf(res, appointments) {
  const doc = new PDFDocument({ margin: 36, size: "A4" });

  res.setHeader(
    "Content-Disposition",
    'attachment; filename="mudanur-appointments.pdf"'
  );
  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);

  doc.fontSize(18).fillColor("#0f766e").text("Mudanur Multispeciality Hospital");
  doc.fontSize(11).fillColor("#475569").text("Appointments Report");
  doc.moveDown();

  appointments.forEach((item, index) => {
    if (index > 0) doc.moveDown(0.8);
    if (doc.y > 720) doc.addPage();

    doc
      .fontSize(12)
      .fillColor("#0f172a")
      .text(`${item.appointmentId} - ${item.patientName}`, { continued: false });
    doc
      .fontSize(9)
      .fillColor("#475569")
      .text(
        `Mobile: ${item.mobileNumber} | Date: ${item.preferredDate} | Time: ${item.preferredTime} | Status: ${item.status}`
      )
      .text(`Reason: ${item.reasonForVisit}`);
  });

  doc.end();
}
