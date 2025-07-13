import React, { useEffect, useState } from "react";
import { getGlobalStatus, toggleEmergency } from "./api";

export default function EmergencyToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    getGlobalStatus().then((res) => setEnabled(res.enabled));
  }, []);

  const toggle = async () => {
    await toggleEmergency(!enabled);
    setEnabled(!enabled);
  };
  return (
    <div className="p-6 mt-10 bg-red-900 rounded-xl shadow text-white">
      <h2 className="text-xl font-bold mb-2">Emergency Switch</h2>
      <p className="mb-4">
        Current:{" "}
        <span className={enabled ? "text-red-300" : "text-green-300"}>
          {enabled ? "STOPPED" : "RUNNING"}
        </span>
      </p>
      <button
        onClick={toggle}
        className="bg-black hover:bg-gray-900 px-4 py-2 rounded"
      >
        {enabled ? "Resume Platform" : "Stop Platform"}
      </button>
    </div>
  );
}
