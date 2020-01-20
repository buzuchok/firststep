import React from 'react';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';

import './exercise-category-block.scss';

const ExerciseCategoryBlock = (props) => {
  //console.log(props.item);
  const { title, desc, children } = props.item;
  // console.log(item);

  let treeItemChildren = children.map((treeItemChild) => {
    return (
      <li key={treeItemChild.id} className="list-item">
        <Link to="/exercises/" className="list-link">
          <Markup content={treeItemChild.title} />
          <span className="badge">{treeItemChild.total}</span>
        </Link>
      </li>
    )
  });
  
  return (
    <div className="category-block">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h2 className="title">{title}</h2> 
          </div>
          <div className="card-text"><span><Markup content={desc} /></span></div>
        </div>
        <ul className="exercise-category-list">
          {treeItemChildren}
        </ul>
      </div>
      </div>
  );
};

export default ExerciseCategoryBlock;