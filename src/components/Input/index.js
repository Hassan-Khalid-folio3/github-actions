import React from 'react'
import PropTypes from 'prop-types'
import './style.css';

export default function Input(props) {
  const {
    value,
    onChange,
    addTodo,
  } = props;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(value);
    }
  };

  return (
    <>
      <input
        className="input"
        value={ value }
        onChange={ onChange }
        onKeyPress={ handleKeyPress }
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
