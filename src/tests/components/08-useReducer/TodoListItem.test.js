import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { dummyTodo } from '../../fixtures/dummyTodo';

describe('Probando <TodoListItem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={dummyTodo[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  it('Debe de mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Debe de llamar a la funcion handleDelete', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(dummyTodo[0].id);
  });
  it('Debe de llamar a la funcion handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(dummyTodo[0].id);
  });
  it('Debe mostrar el texto del TODO', () => {
    expect(wrapper.find('p').text()).toBe('1.Hacer la compra');
  });
});
