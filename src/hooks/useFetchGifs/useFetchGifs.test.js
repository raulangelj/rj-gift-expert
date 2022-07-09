import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "./useFetchGifs"

describe('Pruebas en el hook useFetchGifs: ', () => {
  test('Debe de retornar el estado inicial', () => {
    // renderiza el estado inicial de nuestro hook
    const { result } = renderHook( () => useFetchGifs('Avengers') )
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBe(true)
  })

  test('Debe de retornar un arreglo de imagenes y una bandera de cargando', async () => {
    const { result } = renderHook(() => useFetchGifs('Avengers'))

    // El segundo parametro es opcional y por defecto es 1 segundo para la espera
    // El wait for lo que nos permite es hacer que el test espera a qeu el resultado de nuestro hook sea
    // el expect que buscamos y asi despues poder hacer la validacion que necesitamos
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 3000 }
    )

    const { images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBe(false)
  })
})