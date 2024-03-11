import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import todoReducer from '../todoRedux/reducers/todo/reducer';

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
