import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button 
      className="px-5 py-3 font-montserrat border border-grey-300 ml-2
       hover:bg-blue-600 hover:text-white" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;