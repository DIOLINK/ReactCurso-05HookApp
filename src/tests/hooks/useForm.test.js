import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('Probando useForm', () => {
  const initialForm = {
    name: 'Roger',
    email: 'Rogber@goms.com',
  };
  it('retorna valores por defecto', () => {
    const { result } = renderHook(() => useForm());
    const [values, handleInputChange, reset] = result.current;
    // console.log('result :>> ', result.current);
    expect(values).toEqual({});
    expect(handleInputChange).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
  });
  it('Debe retornar value igual a initialForm', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
  it('Debe cambiar el valor de name', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: 'name', value: 'Roger Bogado' } });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: 'Roger Bogado' });
  });
  it('Debe cambiar el valor de email', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: { name: 'email', value: 'RogerBogado@otro.com' },
      });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, email: 'RogerBogado@otro.com' });
  });
  it('Debe resetear el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: { name: 'email', value: 'RogerBogado@otro.com' },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
