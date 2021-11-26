import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Probando <RealExampleRef />', () => {
  it('Debe de mostrar el componente', () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  it('Debe de mostrar <MultipleCustomHooks />', () => {
    const wrapper = shallow(<RealExampleRef />);
    const btn = wrapper.find('button');
    btn.simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
