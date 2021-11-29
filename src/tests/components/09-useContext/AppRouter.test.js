import { mount } from 'enzyme';
import AppRouter from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en AppRouter.js', () => {
  const user = { name: 'Roger', email: 'Roger@mail.com' };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  it('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
