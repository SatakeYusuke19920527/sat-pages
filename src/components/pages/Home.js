import React from 'react';
import logo from '../../logo.svg';
import Style from './Home.module.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={Style.Home}>
      <div className={Style.body}>
        <img src={logo} className={Style.logo} alt="logo" />
        <Link
          className={Style.button}
          to='/default'
        >
          <p>Enter my Portfolio</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
