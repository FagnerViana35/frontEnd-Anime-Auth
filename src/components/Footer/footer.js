import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line no-restricted-globals
const registerRedict = () => { location.assign('/register')}

const Footer = () =>{
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275', width: '100%'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Click para cadastrar-se</span>
              <Button onClick={registerRedict}>Cadastrar</Button>
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://github.com/FagnerViana35'>
          Feito por Fagner Viana e Renan Brufato 
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;