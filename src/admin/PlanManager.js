import React, { useEffect, useState } from "react";
import { fetchPlans, createPlan, updatePlan, deletePlan } from "./api";

export default function PlanManager() {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: "", price: 0, quota: 0 });

  useEffect(() => {
    fetchPlans().then(data => setPlans(data.plans));
  }, []);

  const handleCreate = async () => {
    await createPlan(newPlan);
    setNewPlan({ name: "", price: 0, quota: 0 });
    const updated = await fetchPlans();
    setPlans(updated.plans);
  };

  const handleUpdate = async (id, quota) => {
    await updatePlan(id, { quota });
    const updated = await fetchPlans();
    setPlans(updated.plans);
  };

  const handleDelete = async (id) => {
    await deletePlan(id);
    const updated = await fetchPlans();
    setPlans(updated.plans);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Plans</h2>

      <ul className="space-y-4 text-gray-100">
        {plans.map((p) => (
          <li key={p.id} className="flex items-center justify-between gap-3">
            <div className="flex-grow">
              {p.name} — {p.quota} wallets — ${p.price}
              {p.assignedToApiKey && (
                <span className="ml-2 text-yellow-400 text-xs">
                  (Private to API Key)
                </span>
              )}
            </div>
            <input
              type="number"
              className="p-1 rounded text-black w-24"
              placeholder="Quota"
              onBlur={(e) => handleUpdate(p.id, parseInt(e.target.value))}
            />
            <button
              onClick={() => handleDelete(p.id)}
              className="bg-red-600 px-3 py-1 rounded text-white text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-sm text-white">
        <h3 className="mb-3 font-semibold">Create New Plan</h3>
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="Name"
            className="p-2 rounded text-black"
            value={newPlan.name}
            onChange={(e) =>
              setNewPlan({ ...newPlan, name: e.target.value })
            }
          />
          <input
            placeholder="Price"
            type="number"
            className="p-2 rounded text-black"
            value={newPlan.price}
            onChange={(e) =>
              setNewPlan({ ...newPlan, price: +e.target.value })
            }
          />
          <input
            placeholder="Quota"
            type="number"
            className="p-2 rounded text-black"
            value={newPlan.quota}
            onChange={(e) =>
              setNewPlan({ ...newPlan, quota: +e.target.value })
            }
          />
          <button
            onClick={handleCreate}
            className="bg-green-600 px-4 py-2 rounded text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}  