import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "./AddCategory"

describe('Pruebas en <AddCategory />', () => {
  test('Debe de mostrar el valor de la caja de texto:', () => {
    // Permite ver que el estado este funcionando correctamente
    render(
      <AddCategory onNewCategory={() => {}} />
    )
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'Gatos' } })
    expect(input.value).toBe('Gatos')
    // expect(screen.getByText('Gatos')).toBeTruthy()
  })

  test('Debe de llamar al onNewCategory si el input tiene un valor', () => {
    const inpuValue = 'Gatos'
    const handleNewCategory = jest.fn()

    render(
      <AddCategory onNewCategory={handleNewCategory} />
    )
    // Se debe de poner un aria-label para que funcione
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inpuValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(handleNewCategory).toHaveBeenCalledTimes(1)
    expect(handleNewCategory).toHaveBeenCalledWith(inpuValue)

  })

  test('No debe de llamar al onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn()
    render(
      <AddCategory onNewCategory={onNewCategory} />
    )

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})