import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import { Link } from 'react-router-dom';
import Spinner from '../ui/spinner';
import './rhyme-category-list.scss';

const apiService = new ApiService();

export default class RhymeCategoryList extends Component {
  
  state = {
    tree: null
  }

  componentDidMount() {
    this.update();
  }

  update() {
    apiService.getRhymeCategories()
    .then((res) => {
      // console.log(res);
      const tree = res;

      this.setState({
        tree
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {

    const { tree } = this.state;

    if (!tree) {
      return <Spinner />;
    };

    let treeView = tree.map((treeItem) => {
      return (
        <li key={treeItem.id} className="list-group-item">
          <Link to="/rhymes/" className="list-group-link">
            <span className="list-group-name">{treeItem.title}</span>
            <span className="badge">{treeItem.total}</span>
          </Link>
        </li>
      )
    })

    return (
      <div className="card card-rhyme-category-list">
        <span className="card-info"><i className="fa fa-question-circle-o"></i></span>
        <div className="card-body">
          <div className="card-title">
            <h2>
              <Link to="/exercises/" exact>
                <span>Потішки та віршики</span>
                <i className="fa fa-chevron-right"></i>
              </Link>
            </h2>
          </div>
          <p className="card-text">Корисна допомога батькам для розваг і активної взаємодії з малюком.</p>
        </div>
  
        <ul className="list-group list-group-flush">
          {treeView}
        
        </ul>
      </div>
    )
  }
}