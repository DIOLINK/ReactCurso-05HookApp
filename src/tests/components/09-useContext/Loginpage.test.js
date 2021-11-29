import { mount } from 'enzyme';
import LoginPage from '../../../components/09-useContext/LoginPages';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Probando <LoginPage />', () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginPage />
    </UserContext.Provider>
  );

  it('Debe de mostrar el componente <LoginPage />', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Debe de llamar a la funcion setUser una vez', () => {
    wrapper.find('button').simulate('click');
    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: 'John Doe',
    });
  });
});
