import React from "react"
import App from "../App"

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const ButtonDoguinho = queryByText('Novo Doguinho');

    expect(ButtonDoguinho).toBeInTheDocument();
  })
})