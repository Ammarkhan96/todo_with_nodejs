import { useState } from 'react';

const useTodosApi = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = async (text) => {
    try {
      const response = await fetch('http://localhost:8001/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: text }),
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };


  const updateTodo = async (id, text) => {
    try {
      const response = await fetch(`http://localhost:8001/api/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: text }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
  
      const updatedTodo = await response.json();
      const updatedTodos = [...todos];
      const updatedIndex = updatedTodos.findIndex(todo => todo.id === updatedTodo.id);
      if (updatedIndex !== -1) {
        updatedTodos[updatedIndex] = updatedTodo;
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:8001/api/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return { todos, createTodo, updateTodo, deleteTodo };
};

export default useTodosApi;
