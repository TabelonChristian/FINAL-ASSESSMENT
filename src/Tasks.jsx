// Tasks.jsx component
import React, { useState } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';
import './Tasks.css';

const tasks = [
  { description: ' Cleaning', assignee: 'Josh', deadline: '2023-03-15', status: ' ' },
  { description: ' Cooking', assignee: 'Dale', deadline: '2023-03-20', status: ' ' },
  { description: ' Writing', assignee: 'Leigh', deadline: '2023-03-12', status: ' ' },
  { description: ' Coding', assignee: 'Patrice', deadline: '2023-03-18', status: ' ' },
  { description: ' Planning', assignee: 'Jeff', deadline: '2023-03-22', status: ' ' },
  { description: ' Organizing', assignee: 'Jethan', deadline: '2023-03-25', status: ' ' },
  { description: ' Researching', assignee: 'Josh', deadline: '2023-03-25', status: ' ' },
  { description: ' Coding', assignee: 'Jacob', deadline: '2023-03-25', status: ' ' },
  { description: ' Shopping', assignee: 'Andre', deadline: '2023-03-25', status: ' ' },
  { description: ' Cleaning', assignee: 'Leigh', deadline: '2023-03-25', status: ' ' },
];

const Tasks = () => {
  const [tasksState, setTasksState] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleToggleStatus = (index) => {
    const updatedTasks = [...tasksState];
    updatedTasks[index].status = updatedTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
    setTasksState(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleSearch = (searchQuery) => {
    const filteredTasks = tasksState.filter((task) => {
      return task.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredTasks(filteredTasks);
  };

  return (
    <div className="container">
      <h2>Tasks</h2>
      <SearchFilter handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Description</th>
            <th>Assignee</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{task.description}</td>
              <td>{task.assignee}</td>
              <td>{task.deadline}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => handleToggleStatus(index)}>Toggle Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;