import { mount } from 'enzyme';
import HomePage from '../../../components/09-useContext/HomePage';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prubas en <HomePage />', () => {
  const user = { name: 'Roger', email: 'Roger@mail.com' };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomePage />
    </UserContext.Provider>
  );

  it('Debe de mostrar el componente <HomePage /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
