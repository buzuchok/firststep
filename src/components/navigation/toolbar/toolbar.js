import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import Toggler from '../toggler';
import NavigationItems from '../navigation-items';
import './toolbar.scss';


const Toolbar = (props) => {
  return (
    <header className="header">
      <div className="container-fluid">
        <Toggler clicked={props.slideoutClicked}/>
        <Logo />
        <nav className="topmenu">
          <NavigationItems />
        </nav>
      </div>
      <div className="panel-overflow" onClick={props.slideoutClicked}></div>
    </header>
  );
};

export default Toolbar;


