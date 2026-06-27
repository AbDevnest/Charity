const API_URL = import.meta.env.VITE_API_URL;

const getHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// ============ AUTH CHECK ============
export const verifyAdminToken = async () => {
  const res = await fetch(`${API_URL}/admin/verify`, { headers: getHeaders() });
  return res.json();
};

// ============ SUBSCRIBERS ============
export const getSubscribers = async () => {
  const res = await fetch(`${API_URL}/admin/subscribers`, { headers: getHeaders() });
  return res.json();
};

export const deleteSubscriber = async (id) => {
  const res = await fetch(`${API_URL}/admin/subscribers/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return res.json();
};

export const updateSubscriberStatus = async (id, data) => {
  const res = await fetch(`${API_URL}/admin/subscribers/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

// ============ CONTACTS ============
export const getContacts = async () => {
  const res = await fetch(`${API_URL}/admin/contacts`, { headers: getHeaders() });
  return res.json();
};

export const deleteContact = async (id) => {
  const res = await fetch(`${API_URL}/admin/contacts/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return res.json();
};

export const updateContactStatus = async (id, data) => {
  const res = await fetch(`${API_URL}/admin/contacts/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

// ============ VISITORS ============
export const getVisitors = async () => {
  const res = await fetch(`${API_URL}/admin/visitors`, { headers: getHeaders() });
  return res.json();
};

export const deleteVisitor = async (id) => {
  const res = await fetch(`${API_URL}/admin/visitors/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return res.json();
};

export const updateVisitorStatus = async (id, data) => {
  const res = await fetch(`${API_URL}/admin/visitors/${id}`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};