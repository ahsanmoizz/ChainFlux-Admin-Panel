import React from "react";
import PlanManager from "./PlanManager";
import EmergencyToggle from "./EmergencyToggle";
import AdminUserList from "./AdminUserList";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center border-b border-gray-700 pb-4">
          ChainFlux Admin Panel
        </h1>
        <PlanManager />
        <AdminUserList />
        <EmergencyToggle />
      </div>
    </div>
  );
}
