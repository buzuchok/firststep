import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import Spinner from '../ui/spinner';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import './home-exercise-category-list.scss';
import homeIcon1 from '../../assets/images/icon-290.svg';
import homeIcon2 from '../../assets/images/icon-291.svg';
import homeIcon3 from '../../assets/images/icon-292.svg';
import homeIcon4 from '../../assets/images/icon-301.svg';

const apiService = new ApiService();

const homeIcons = [
  homeIcon1, homeIcon2, homeIcon3, homeIcon4
]

export default class HomeExerciseCategoryList extends Component {

  state = {
    tree: null
  }
  

  componentDidMount() {
    this.update();
  }

  update() {
    apiService.getExerciseCategories()
    .then((res) => {
      //console.log(res);
      const tree = res.filter(item => !item.parent_id);
      // console.log(parentItems);

      tree.map((parentItem) => {
        parentItem.total = res.filter(item => item.parent_id === parentItem.id).length;
        parentItem.children = res
          .filter(item => item.parent_id === parentItem.id)
          .sort(function(a, b) {
            return parseInt(a.total) < parseInt(b.total);
          })
          .filter((item, index) => {
            return index < 3;
          });
      });

      this.setState({
        tree
      });

      
    })
    .catch((err) => {
      console.log(err);
    });
  }

  

  render() {

    
    const { tree } = this.state;

    if (!tree) {
      return <Spinner />;
    };

    // console.log(tree);

    // console.log(parentView);

    let treeView = tree.map((treeItem, index) => {
      let treeItemChildren = treeItem.children.map((treeItemChild, index) => {
        
        return (
          <React.Fragment key={treeItemChild.id}>
            {(index ? (<span className="dot"> &middot; </span>) : '')}
            <span className="exercise-category-child">
              <Markup tagName={'fragment'} content={treeItemChild.title} />
            </span>
          </React.Fragment>
        );
      });

      return (
        // <React.Fragment>
          <li className={`item item-${index}`} key={treeItem.id}>
          
            <div className="item-icon"><img src={homeIcons[index]} alt=""/></div>
            <div className="item-title"><Markup content={treeItem.title} /></div>
            <span className="exercise-category-children">
              {treeItemChildren} <span className="more">... і ще <strong>{parseInt(treeItem.total) - 3}</strong> підрозділів</span>
            </span>
          </li>
          
        // </React.Fragment>
      );
    });

    return (
      <div className="card card-exercise-category-list">
        <div className="card-body">
          <div className="card-title">
            <h2>
              <Link to="/exercise/" exact>
                <span>Розвиваючі вправи</span>
                <i className="fa fa-chevron-right"></i>
              </Link>
            </h2>
          </div>
          <p className="card-text">Великий вибір найкорисніших вправ та ігр для розвитку різного типу навичок.</p>
        </div>
  
        <ul className="home-exercise-category-list">
          {treeView}
        </ul>

        <div className="btn-w text-center">
          <Link to="/exercise/" exact className="btn btn-info">
            Переглянути
            <i className="fa fa-chevron-right"></i>
          </Link>
        </div>
      </div>      
    );
  }

  
}