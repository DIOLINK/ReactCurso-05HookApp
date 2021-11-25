import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

const TodoForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, resetForm] = useForm({
    description: '',
  });
  const handleSutmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    handleAddTodo(newTodo);
    resetForm();
  };
  return (
    <form onSubmit={handleSutmit}>
      <div className="d-grid gap-2">
        <input
          className="form-control form-control-lg"
          type="text"
          name="description"
          placeholder="Add TODO..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Add
        </button>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
