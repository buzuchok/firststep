import React from 'react';
import NavigationItems from '../navigation-items';
import './slideout-drawer.scss';

const SlideoutDrawer = () => {

  return (
    <nav className="mobilemenu" id="mobilemenu">
      <NavigationItems classes={"flex-column"} />
    </nav>
  );
};

export default SlideoutDrawer;