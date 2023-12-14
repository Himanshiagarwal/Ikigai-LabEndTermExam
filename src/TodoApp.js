import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { text: newTask, dateTime: new Date().toLocaleString() };
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { text: newTask, dateTime: new Date().toLocaleString() }]);
      }
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  };

  const clearTaskInput = () => {
    setNewTask('');
    setEditIndex(null);
  };

  return (
    <div className="todo-app">
      <h2>To-Do App</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
        <button onClick={clearTaskInput}>Clear</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>
            <span className="date-time">{task.dateTime}</span>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;