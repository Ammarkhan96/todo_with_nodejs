import React from 'react';

const TextInput = ({ id, value, onChange }) => {
    return (
        <input
            id={id}
            className="px-5 py-3 border border-grey-300"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter todo here..."

        />
    )
}

export default TextInput;
