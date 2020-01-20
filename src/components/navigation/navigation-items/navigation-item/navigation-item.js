import React from 'react';
import { Link } from 'react-router-dom';
import './navigation-item.scss';

const NavigationItem = (props) => {
  return (
    <li className="nav-item">
      <Link to={props.link} exact={props.exact.toString()} className="nav-link">
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;