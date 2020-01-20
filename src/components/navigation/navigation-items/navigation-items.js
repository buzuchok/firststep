import React from 'react';
import NavigationItem from './navigation-item';
import { AuthContext } from '../../../app';
import './navigation-items.scss';

const NavigationItems = (props) => {
  return (
    <ul className={`nav ${props.classes}`}>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fa fa-home"></i>
          <span>Головна</span>
        </a>
      </li>
      <NavigationItem link='/exercise/' exact>
        <i className="fa fa-child"></i>
        <span>Вправи</span>
      </NavigationItem>
      <NavigationItem link='/rhyme/' exact>
        <i className="fa fa-smile-o"></i>
        <span>Потішки</span>
      </NavigationItem>
      <AuthContext.Consumer>
        {auth => auth 
          ? <>
            <NavigationItem link='/bookmarks/' exact>
              <i className="fa fa-star"></i>
              <span>Закладки</span>
            </NavigationItem>
            <NavigationItem link='/profile/' exact>
              <i className="fa fa-user"></i>
              <span>Профіль</span>
            </NavigationItem>
            </>
          : <NavigationItem link='/login/' exact>
              <i className="fa fa-sign-in"></i>
              <span>Увійти</span>
            </NavigationItem>
        }
      </AuthContext.Consumer>
    </ul>
  )
}

export default NavigationItems;