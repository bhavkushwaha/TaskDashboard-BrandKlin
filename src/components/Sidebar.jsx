import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-dark text-light h-screen w-64 fixed p-5">
      <h1 className="text-xl font-bold text-primary mb-10">Task Dashboard</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/tasks"
              className="text-light hover:text-primary transition-all"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="text-light hover:text-primary transition-all"
            >
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
