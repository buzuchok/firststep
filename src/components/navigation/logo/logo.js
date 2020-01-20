import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';
import fsLogo from '../../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <Link to='/'>
        <img src={fsLogo} alt="FirstStep"/>
      </Link>
    </div>
  );
};

export default Logo;


