import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGrid } from './GifGrid';

// Hacer el mock de lo que tiene el path (useFetchGifs)
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Avengers';

  test('Debe de mostrar el loading al inicio: ', () => {
    // Me mockea el return de la funcion useFetchGifs
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(
      <GifGrid category={category} />
    );

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText('Avengers'));
  })

  test('Debe de mostrar los Gifs (items cuando ya tenga el arreglo): ', () => {
    const gifs = [
      { id: 'ABC', title: 'Avengers', url: 'https://localhost/avengers.gif' },
      { id: 'DEF', title: 'Avengers', url: 'https://localhost/avengers.gif' },
      { id: 'GHI', title: 'Avengers', url: 'https://localhost/avengers.gif' },
    ]

    // Me mockea el return de la funcion useFetchGifs
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(
      <GifGrid category={category} />
    )

    expect(screen.getAllByRole('img').length).toBe(3)
  })
})