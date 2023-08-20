import React, { useState } from 'react';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='task-list-container'>
      <h2>Lista de Tareas</h2>
      <div className='new-task'>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li key={index} className='task-item'>
            <div className='task-item-content'>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <span className={task.completed ? 'completed-task' : 'uncompleted-task'}>{task.text}</span>
            </div>
            <button className='delete-button' onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
