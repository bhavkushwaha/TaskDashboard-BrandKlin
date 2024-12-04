import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, markAsCompleted } from "../features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-dark p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-lg font-bold text-light">{task.title}</h3>
      <p className="text-sm text-light">{task.description}</p>
      <p className="text-xs text-light mt-2">Due: {task.dueDate}</p>
      <div className="mt-3 flex space-x-2">
        {!task.completed && (
          <button
            onClick={() => dispatch(markAsCompleted(task.id))}
            className="bg-primary text-light px-3 py-1 rounded hover:bg-accent"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="bg-red-500 text-light px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
