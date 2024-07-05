import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div style={styles.container}>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    '@media (max-width: 768px)': {
      gap: '10px',
    },
    '@media (max-width: 480px)': {
      gap: '5px',
    },
  },
};

export default TaskList;