import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

// Load initial state from localStorage or use an empty array if no saved data
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return { tasks: [] };
    }
    return { tasks: JSON.parse(serializedState) };
  } catch (err) {
    return { tasks: [] };
  }
};

const initialState = loadState();

export const rootReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      break;
    case EDIT_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };
      break;
    case DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
      break;
    case TOGGLE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
      break;
    default:
      return state;
  }
  
  // Save the new state to localStorage
  localStorage.setItem('tasks', JSON.stringify(newState.tasks));
  return newState;
};