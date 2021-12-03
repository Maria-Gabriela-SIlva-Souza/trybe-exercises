// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {/* <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3> */}
      {/* Não exibir a mensagem caso o email ainda não tenha sido enviado. */}
      {
        email && (
          // <h3 data-testid="id-is-email-valid" >
          // Mude a cor do texto caso o email seja válido ou inválido.
          <h3 data-testid="id-is-email-valid" className={verifyEmail(email) ? 'green-text' : 'red-text'}>
            {(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}
          </h3>
        )
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;