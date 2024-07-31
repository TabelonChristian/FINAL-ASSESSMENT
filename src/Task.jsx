// Task.jsx component
import React from 'react';

const Task = ({ task, index, handleToggleStatus }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.description}</td>
      <td>{task.assignee}</td>
      {task.status === 'Pending' && <td>{task.deadline}</td>}
      <td>{task.status}</td>
      <td>
        <button onClick={() => handleToggleStatus(index)}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default Task;