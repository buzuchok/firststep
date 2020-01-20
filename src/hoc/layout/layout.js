import React, { Component } from 'react';
import Toolbar from '../../components/navigation/toolbar';
import SlideoutDrawer from '../../components/navigation/slideout-drawer';
import Slideout from 'slideout';


class Layout extends Component {

  componentDidMount() {
    this.slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('mobilemenu'),
      'padding': 256,
      'tolerance': 70
    });

    const fixed = document.querySelector('.header');

    this.slideout.on('translate', function(translated) {
      fixed.style.transform = 'translateX(' + translated + 'px)';
    });

    this.slideout.on('beforeopen', function () {
      fixed.style.transition = 'transform 300ms ease';
      fixed.style.transform = 'translateX(256px)';
      this.panel.classList.add('panel-open');
      document.querySelector('html').classList.add('html-slideout-open');
    });

    this.slideout.on('beforeclose', function () {
      fixed.style.transition = 'transform 300ms ease';
      fixed.style.transform = 'translateX(0px)';
      this.panel.classList.remove('panel-open');
      document.querySelector('html').classList.remove('html-slideout-open');
    });
  }

  slideoutDrawerToggleHandler = () => {
    this.slideout.toggle();
  }

  render() {
    return (
      <React.Fragment>
        <SlideoutDrawer />
        <Toolbar slideoutClicked={this.slideoutDrawerToggleHandler}/>
        
        <div id="panel" className="panel">
          <div className="container-fluid">
            <main className="main">
              {this.props.children}
            </main>
          </div>
          <div className="panel-overflow"  onClick={this.slideoutDrawerToggleHandler}></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout;