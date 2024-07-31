//Tasks.jsx component
import React, { useState } from 'react';
import Task from './Task';
import SearchFilter from './SearchFilter';
import './Tasks.css';

const tasks = [
  { description: 'Interviewing', assignee: 'Josh', deadline: '2024-03-15', status: ' ' },
  { description: 'Compiling', assignee: 'Dale', deadline: '2024-03-20', status: ' ' },
  { description: 'Documentation', assignee: 'Leigh', deadline: '2024-03-12', status: ' ' },
  { description: 'Coding', assignee: 'Patrice', deadline: '2024-03-18', status: ' ' },
  { description: 'Planning', assignee: 'Jeff', deadline: '2024-03-22', status: ' ' },
  { description: 'Organizing', assignee: 'Jethan', deadline: '2024-03-25', status: ' ' },
  { description: 'Researching', assignee: 'Josh', deadline: '2024-03-25', status: ' ' },
  { description: 'Coding', assignee: 'Jacob', deadline: '2024-03-25', status: ' ' },
  { description: 'Interviewing', assignee: 'Andre', deadline: '2024-03-25', status: ' ' },
  { description: 'Documentation', assignee: 'Leigh', deadline: '2024-03-25', status: ' ' },
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
    <div class= "container">
      <h2>Tasks</h2>
      <SearchFilter handleSearch={handleSearch} />
      <ul>
        <li className="header">
          <span>No.</span>
          <span>Task Description</span>
          <span>Assigne</span>
          <span></span>
          <span></span>
        </li>
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            handleToggleStatus={handleToggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;