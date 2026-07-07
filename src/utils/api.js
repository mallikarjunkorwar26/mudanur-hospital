const API_BASE = import.meta.env.VITE_API_URL || "";

export function logClientActivity(event, details = {}) {
  const payload = {
    event,
    page: window.location.href,
    userAgent: navigator.userAgent,
    details,
  };

  fetch(`${API_BASE}/api/logs/client`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

export async function apiRequest(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch (error) {
    logClientActivity("request_network_failure", {
      path,
      method: options.method || "GET",
      message: error.message,
    });
    throw error;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Request failed");
    error.data = data;
    logClientActivity("request_failure", {
      path,
      method: options.method || "GET",
      status: response.status,
      message: error.message,
      response: data,
    });
    throw error;
  }

  return data;
}

export function apiDownloadUrl(path) {
  return `${API_BASE}${path}`;
}

export async function downloadFile(path, token, filename) {
  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    logClientActivity("download_network_failure", {
      path,
      filename,
      message: error.message,
    });
    throw error;
  }

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    logClientActivity("download_failure", {
      path,
      filename,
      status: response.status,
      response: data,
    });
    throw new Error(data.message || "Download failed");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
