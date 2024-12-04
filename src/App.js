import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-gray-200">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/tasks" element={<Dashboard />} />
            {/* Add additional routes if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
