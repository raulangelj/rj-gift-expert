import { render } from "@testing-library/react"
import { GifExpertApp } from "./GifExpertApp"

describe('Prueba en <GifExpertApp />: ', () => {
  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })
})