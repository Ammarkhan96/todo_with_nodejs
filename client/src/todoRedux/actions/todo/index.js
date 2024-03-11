import { v4 as uuidv4 } from 'uuid';

export const addTodos = (text) => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  text,
});

export const deleteTodos = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const updateTodos = (id, text) => ({
  type: 'UPDATE_TODO',
  id,
  text,
});
