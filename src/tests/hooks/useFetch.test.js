import { act, renderHook } from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Probando hook useFetch', () => {
  it('Debe retornar informacion por defecto', () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    // console.log('result :>> ', result.current);
    const state = result.current;
    expect(state).toEqual({
      data: null,
      loading: true,
      error: null,
    });
  });
  test('Debe retornar informacion y loading: false, error: false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );

    await waitForNextUpdate({ timeout: 2000 }); // espera a que se ejecute el hook esperando 2 segundos
    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  test('Debe de manejar el error', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetch('https://reqres.in/apid/users?page=2') //https://reqres.in/api/users?page=2
    );

    await waitForNextUpdate({ timeout: 2000 }); // espera a que se ejecute el hook esperando 2 segundos
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });
});
