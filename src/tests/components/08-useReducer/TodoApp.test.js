import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { dummyTodo } from '../../fixtures/dummyTodo';

describe('Prubas en <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});
  it('Debe de mostrar componente por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Debe de mostrar componente con datos', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoForm').prop('handleAddTodo')(dummyTodo[0]);
      wrapper.find('TodoForm').prop('handleAddTodo')(dummyTodo[1]);
    });
    expect(wrapper.find('small').text().trim()).toBe(
      dummyTodo.length.toString()
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
  it('Debe de llamar el evento handleDelete', () => {
    wrapper.find('TodoForm').prop('handleAddTodo')(dummyTodo[0]);
    expect(wrapper.find('small').text().trim()).toBe('1');
    wrapper.find('TodoList').prop('handleDelete')(dummyTodo[0].id);
    expect(wrapper.find('small').text().trim()).toBe('0');
  });
});
