import React, { Component } from 'react';
import ExerciseCategoryBlock from '../exercise-category-block';
import ApiService from '../../services/api-service';
import Spinner from '../ui/spinner';
import './exercise-category-blocks.scss';

const apiService = new ApiService();

export default class ExerciseCategoryBlocks extends Component {
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
      //console.log(tree);

      tree.map((parentItem) => {
        parentItem.total = res.filter(item => item.parent_id === parentItem.id).length;
        parentItem.children = res
          .filter(item => item.parent_id === parentItem.id)
          .sort(function(a, b) {
            return parseInt(a.total) < parseInt(b.total);
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
  
  render () {
    const { tree } = this.state;

    if (!tree) {
      return <Spinner />;
    };

    let treeView = tree.map((item) => {
      // console.log(item);
      return <ExerciseCategoryBlock key={item.id} item={item}/>
    })

    return (
      <div className="category-blocks">
        {treeView}
      </div>
    );
  }
};
