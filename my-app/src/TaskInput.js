import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Task</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    border: '2px solid #cc00ff',
    backgroundColor: '#d6d6c2',
    borderRadius: '8px 0 0 8px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#cc00ff',
    color: 'white',
    border: 'none',
    borderRadius: '0 8px 8px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default TaskInput;