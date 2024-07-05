export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK'; // New action type

// Action creator for adding a task
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), text, completed: false },
});

// Action creator for editing a task
export const editTask = (id, text) => ({
  type: EDIT_TASK,
  payload: { id, text },
});

// Action creator for deleting a task
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

// New action creator for toggling task completion
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});