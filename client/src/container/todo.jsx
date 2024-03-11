import React from 'react';
import TodoList from '../components/TodoList/todoList';
import Input from '../components/Input';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import useTodosApi from '../hooks/useTodoApi';

const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const {createTodo, updateTodo, deleteTodo } = useTodosApi()

  const handleAddTodo = (text) => {
    dispatch({ type: 'ADD_TODO', text });
    createTodo(text)
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', index: id });
    deleteTodo(id)
  };

  const handleUpdateTodo = (id) => {
    const newText = prompt('Enter new todo text:');
    if (newText !== null) {
      dispatch({ type: 'UPDATE_TODO', index: id, text: newText });
      updateTodo(id, newText)
    }
  };

  return (
    <div>
      <Input onSubmit={handleAddTodo} />
      <TodoList
        todos={todos} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
    </div>
  );
};

export default Todo;
