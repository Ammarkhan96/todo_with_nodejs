import React from 'react';
import TodoProvider from './context/TodoProvider';
import Todo from './container/todo';

function App() {
  
  return (
    <TodoProvider>
      <div>
        <h1 className="mt-8 font-montserrat text-center text-5xl font-extrabold 
        text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-500">
          Todo with Redux</h1>
        <Todo  />
      </div>
    </TodoProvider>
  );
}

export default App;
