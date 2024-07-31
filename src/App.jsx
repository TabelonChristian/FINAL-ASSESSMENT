import React from 'react';
import './App.css'; // Import the CSS file
import Tasks from './Tasks';

const App = () => {
  return (
    <div>
      <h1 class = "title">Task List</h1>
      <Tasks />
    </div>
  );
};

export default App;