/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {

  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://reactavancado.com.br" target="_blank" rel="noopener noreferrer">
          Powered by React Avançado
        </a>
      </div>

    </Wrapper>
  );
}

export default LeftMenuFooter;
