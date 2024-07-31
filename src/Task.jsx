// Task.jsx component


import React from 'react';

const Task = ({ task, index, handleToggleStatus }) => {
  return (
    <li>
      <span>{index + 1}</span>
      <span>{task.description}</span>
      <span>{task.assignee}</span>
      {task.status === 'Pending' && <span>{task.deadline}</span>}
      <span>{task.status}</span>
      <button onClick={() => handleToggleStatus(index)}>Toggle Status</button>
    </li>
  );
};

export default Task;