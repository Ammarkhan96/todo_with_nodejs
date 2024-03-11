const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: action,
        text: action.text,
        key: action.id + action.text, 
      };
      return [...state, newTodo];

    case 'DELETE_TODO':
      return state.filter((todo, i) => i !== action.index);

    case 'UPDATE_TODO':
      return state.map((todo, i) =>
        i === action.index ? { ...todo, text: action.text } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
