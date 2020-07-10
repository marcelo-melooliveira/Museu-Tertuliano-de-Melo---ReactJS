import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
// import Notifications from '../Notifications';

import logo from '../../assets/logo-museu.png'

import { Container, Content, Profile } from './styles';

export default function HeaderBar() {



  return (
    <div className='container-fluid p-0 fixed-top'>
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
    <img style={{width:50, height:50}} className='nav-brand' src={logo} alt="GoBarber" />
    <button style={{outline: 'none'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
    </button>

    <section className="collapse navbar-collapse" id="navbarMainToggler">
      <div className='navbar-nav ml-auto'>
          <Link className='nav-item nav-link' to="/">CONHEÇA O MUSEU</Link>
          <Link className='nav-item nav-link' to="/historia-pre-colonial">HISTÓRIA PRÉ-COLONIAL</Link>
          <Link className='nav-item nav-link' to="/historico-cultural">HISTÓRICO CULTURAL</Link>
          <Link className='nav-item nav-link' to="/meio-ambiente">MEIO AMBIENTE</Link>
        </div>
    </section> 
    </nav>
  </div>
  );
}
