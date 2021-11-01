import React from 'react';

// Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;
// No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>Conteúdos de Front-End</h1>
        <br />
      </div>
    )
  }
}
export default Header
