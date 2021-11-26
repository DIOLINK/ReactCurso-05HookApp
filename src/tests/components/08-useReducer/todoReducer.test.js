import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { dummyTodo } from '../../fixtures/dummyTodo';

describe('Probando todoReducer', () => {
  it('Debe retornar un stado', () => {
    const state = todoReducer(dummyTodo, {});
    expect(state).toEqual(dummyTodo);
  });
  it('Debe de agregar un nuevo TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Hacer la compra',
      done: false,
    };
    const action = {
      type: 'ADD_TODO',
      payload: newTodo,
    };
    const state = todoReducer(dummyTodo, action);
    console.log('state :>> ', state);
    expect(state).toEqual([...dummyTodo, newTodo]);
  });
  it('Debe remover un TODO', () => {
    const action = {
      type: 'REMOVE_TODO',
      payload: 1,
    };
    const state = todoReducer(dummyTodo, action);
    console.log('state :>> ', state);
    expect(state).toEqual(dummyTodo.filter((todo) => todo.id !== 1));
  });
  it('Debe hacer TOGGLE_TODO', () => {
    const action = {
      type: 'TOGGLE_TODO',
      payload: 1,
    };
    const state = todoReducer(dummyTodo, action);
    console.log('state :>> ', state);
    expect(state).toEqual(
      dummyTodo.map((todo) =>
        todo.id === 1 ? { ...todo, done: !todo.done } : todo
      )
    );
  });
});
