import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input';

export default function TodoList() {
  const [input, onInputChange] = useState('');
  const [todos, onTodosChange] = useState([]);

  const addTodo = () => {
    if (input) {
      onTodosChange([...todos, input]);
      onInputChange('');
    }
  };

  const removeTodo = (todo) => () => {
    if (todos.includes(todo)) {
      onTodosChange(todos.filter(t => t !== todo));
    }
  };

  const list = (
    <div>
      { todos.map(todo => 
        <div className="list-row">
          { todo }
          <button className="remove-button" onClick={ removeTodo(todo) }>Remove</button>
        </div>
      ) }
    </div>
  );

  return (
    <>
      <div className="todolist-container">
        <Input
          value={ input }
          onChange={ (e) => onInputChange(e.target.value) }
          addTodo={ addTodo }
        />
      { list }
      </div>
    </>
  );
}

TodoList.propTypes = {

}
