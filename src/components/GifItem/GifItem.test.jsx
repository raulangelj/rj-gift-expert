import { render, screen } from '@testing-library/react';
import { GifItem } from './GifItem';

describe('Pruebas <GifItem />', () => {
  const title = 'Titulo del GIF';
  const url = 'https://giphy.com/embed/leB1qRInddfWdAe2Yw';

  test('Debe de hacer match con el snapshot', () => {
    const {container } = render(
      <GifItem
        title={title}
        url={url}
      />
    )

    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar la imagen con el url y el ALT correcto', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    )

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('Debe de mostrar el titulo en el componente', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    )

    expect(screen.getByText(title)).toBeTruthy();
  })
})