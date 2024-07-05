// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  return (
    <Provider store={store}>
      <div style={styles.background}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>To-Do Application</h1>
          </div>
          <div style={styles.taskContainer}>
            <TaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    backgroundImage: 'linear-gradient(315deg, #e0e0e0 0%, #c2c2c2 74%)',
    overflow: 'auto',
    padding: '20px',
  },
  container: {
    backgroundColor: '#e0e0e0',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '10px 10px 30px #c2c2c2, -10px -10px 30px #ffffff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    width: '100%',
    maxWidth: '600px',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  title: {
    color: '#4a4a4a',
    fontSize: '2em',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  taskContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: 'inset 5px 5px 10px #c2c2c2, inset -5px -5px 10px #ffffff',
    maxHeight: '60vh',
    overflow: 'auto',
  },
};

export default App;