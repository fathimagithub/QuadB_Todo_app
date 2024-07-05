import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask, toggleTask } from './redux/actions';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      dispatch(editTask(task.id, editedText));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div style={{...styles.container, backgroundColor: task.completed ? '#999999' : '#f0f0f0'}}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        style={styles.checkbox}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          style={styles.input}
        />
      ) : (
        <span style={{...styles.text, textDecoration: task.completed ? 'line-through' : 'none'}}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit} style={{...styles.button, backgroundColor: '#6e8efb'}}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete} style={{...styles.button, backgroundColor: '#ff6b6b'}}>Delete</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s',
  },
  checkbox: {
    marginRight: '15px',
    transform: 'scale(1.2)',
  },
  text: {
    flex: 1,
    marginRight: '15px',
    fontSize: '16px',
    color: '#4a4a4a',
  },
  input: {
    flex: 1,
    marginRight: '15px',
    padding: '8px',
    fontSize: '16px',
    border: '2px solid #6e8efb',
    borderRadius: '4px',
    outline: 'none',
  },
  button: {
    padding: '8px 16px',
    marginLeft: '8px',
    fontSize: '14px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Task;