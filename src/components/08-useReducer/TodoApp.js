import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
  // return [
  //   {
  //     id: new Date().getTime(),
  //     description: 'Learn React',
  //     done: false,
  //   },
  // ];
};
const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = { type: 'REMOVE_TODO', payload: todoId };
    dispatch(action);
  };
  const handleToggle = (todoId) => {
    const action = { type: 'TOGGLE_TODO', payload: todoId };
    dispatch(action);
  };
  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };
  return (
    <div>
      <h1>
        TodoApp (<small>{todos.length}</small>)
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
