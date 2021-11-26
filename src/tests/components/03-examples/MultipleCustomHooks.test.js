import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useCounter from '../../../hooks/useCounter';
import useFetch from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');
describe('Pruebas en <MultipleCustomHooks />', () => {
  it('Debe mostrar el coponente', () => {
    useCounter.mockReturnValue({ counter: 1, increment: () => {} });
    useFetch.mockReturnValue({ data: null, loading: true, error: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Debe de mostrar la informacion', () => {
    useCounter.mockReturnValue({ counter: 1, increment: () => {} });
    useFetch.mockReturnValue({
      data: [{ author: 'Roger', quote: 'Te felicito' }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    // console.log('wrapper :>> ', wrapper.html());
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('figcaption').text().trim()).toBe('Roger');
  });
});
