const API_URL = "http://localhost:4000/api/admin";
const ADMIN_KEY = "admin_secret"; // replace with env in production

const headers = {
  "Content-Type": "application/json",
  "x-admin-key": ADMIN_KEY
};
export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`, { headers });
  return res.json();
}

export async function toggleBlock(uid, block) {
  const route = block ? "block" : "unblock";
  const res = await fetch(`${API_URL}/${route}/${uid}`, {
    method: "POST",
    headers
  });
  return res.json();
}

export async function assignPlan(uid, planId) {
  const res = await fetch(`${API_URL}/assign-plan/${uid}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ planId })
  });
  return res.json();
}

export async function fetchPlans() {
  const res = await fetch(`${API_URL}/plans`, { headers });
  return res.json();
}

export async function updatePlan(planId, updates) {
  const res = await fetch(`${API_URL}/plans/${planId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(updates)
  });
  return res.json();
}

export async function createPlan(data) {
  const res = await fetch(`${API_URL}/plans`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function getGlobalStatus() {
  const res = await fetch(`${API_URL}/global-status`, { headers });
  return res.json();
}

export async function toggleEmergency(enabled) {
  const res = await fetch(`${API_URL}/global-stop`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ enabled })
  });
  return res.json();
}
export async function deletePlan(id) {
  const res = await fetch(`${API_URL}/plans/${id}`, {
    method: "DELETE",
    headers
  });
  return res.json();
}

export default {
  fetchUsers,
  toggleBlock,
  assignPlan,
  fetchPlans,
  updatePlan,
  createPlan,
  deletePlan, // ✅
  getGlobalStatus,
  toggleEmergency
};