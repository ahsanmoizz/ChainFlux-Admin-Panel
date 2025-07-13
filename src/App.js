import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "./admin/AdminDashboard";
import PlanManager from "./admin/PlanManager";
import EmergencyToggle from "./admin/EmergencyToggle";

import AdminUserList from "./admin/AdminUserList";
export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/plans" element={<PlanManager />} />
            <Route path="/list" element={<AdminUserList />} />
            <Route path="/emergency" element={<EmergencyToggle />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
