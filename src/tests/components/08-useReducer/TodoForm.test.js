import { shallow } from 'enzyme';
import TodoForm from '../../../components/08-useReducer/TodoForm';

describe('Probando <TodoForm />', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoForm handleAddTodo={handleAddTodo} />);
  it('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('No debe de llamar a handleAddTodo', () => {
    const fomrSubmit = wrapper.find('form').prop('onSubmit');
    fomrSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });
  it('Debe de llamar a handleAddTodo', () => {
    const value = 'Aprender Jest';
    wrapper
      .find('input')
      .simulate('change', { target: { value, name: 'description' } });
    const fomrSubmit = wrapper.find('form').prop('onSubmit');
    fomrSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
