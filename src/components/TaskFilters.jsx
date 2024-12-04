import React from "react";

const TaskFilters = ({ setFilter }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <button
        onClick={() => setFilter("all")}
        className="px-4 py-2 bg-primary text-light rounded hover:bg-accent"
      >
        All Tasks
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="px-4 py-2 bg-primary text-light rounded hover:bg-accent"
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className="px-4 py-2 bg-primary text-light rounded hover:bg-accent"
      >
        Pending
      </button>
      <button
        onClick={() => setFilter("overdue")}
        className="px-4 py-2 bg-primary text-light rounded hover:bg-accent"
      >
        Overdue
      </button>
    </div>
  );
};

export default TaskFilters;
