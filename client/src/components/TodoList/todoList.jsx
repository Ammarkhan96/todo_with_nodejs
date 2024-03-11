import React from 'react';


const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    <div className='text-center pt-6'>
      <ul>
        {todos.map((todo, i) => (
          <li className='text-center pt-2' key={i}>
            {todo.text}
            
            <button 
              className="px-4 py-2 font-montserrat border border-grey-300 ml-2
              hover:bg-green-600 hover:text-white" 
              onClick={() => onUpdate(i)}>Update</button>

            <button
              className="px-4 py-2 font-montserrat border border-grey-300 ml-2 
              hover:bg-red-600 hover:text-white" 
              onClick={() => onDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
