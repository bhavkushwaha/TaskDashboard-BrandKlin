import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskCard from "../components/TaskCard";
import TaskFilters from "../components/TaskFilters";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "overdue")
      return new Date(task.dueDate) < new Date() && !task.completed;
    return false;
  });

  return (
    <div className="ml-64 p-10 bg-gray-900 min-h-screen text-light">
      <h1 className="text-2xl font-bold mb-5">Task Management Dashboard</h1>
      <TaskFilters setFilter={setFilter} />
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Dashboard;
