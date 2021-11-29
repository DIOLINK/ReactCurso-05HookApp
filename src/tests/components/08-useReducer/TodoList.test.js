import { shallow } from 'enzyme';
import TodoList from '../../../components/08-useReducer/TodoList';
import { dummyTodo } from '../../fixtures/dummyTodo';

describe('Prueba en <TodoList />', () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={dummyTodo}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );
  it('Debe de mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Debbe de tener dos <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length).toBe(dummyTodo.length);
  });
});
