import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}.{todo.description}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
