import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';
describe('Probando useCounter', () => {
  it('Debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    // console.log('result :>> ', result.current);
    expect(result.current.counter).toBe(10);
    expect(result.current.increment).toBeInstanceOf(Function);
    expect(result.current.decrement).toBeInstanceOf(Function);
    expect(result.current.reset).toBeInstanceOf(Function);
  });
  it('Debe retornar counter igual al value', () => {
    const value = 20;
    const { result } = renderHook(() => useCounter(value));

    expect(result.current.counter).toBe(value);
  });
  it('Debe retornar counter incremando y resetar', () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;
    //act permite hacer acciones del hook
    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(11);
    act(() => {
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
  it('Debe retornar counter decrement', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    //act permite hacer acciones del hook
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(9);
  });
});
