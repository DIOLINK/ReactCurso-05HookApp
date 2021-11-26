import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Probando HookApp.js', () => {
  it('Debe mostrar el componente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
