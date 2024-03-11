import React, { useState } from 'react';
import Button from './Button';
import TextInput from './text_input';
import useTodosApi from '../hooks/useTodoApi';

const Input = ({onSubmit}) => {
  const [text, setText] = useState('');
  // const { createTodo } = useTodosApi()

  const handleSubmit = () => {
    if (text.trim() === '') {
      alert('Create Your Todo First...');
      return;
    }
    onSubmit(text)
    // createTodo(text)
    setText('');
  };

  return (
    <div className='text-center mt-20'>
      <TextInput value={text} onChange={(e) => setText(e.target.value)} />
      <Button text="Create Todo" onClick={ handleSubmit } />
    </div>
  );
};

export default Input;
