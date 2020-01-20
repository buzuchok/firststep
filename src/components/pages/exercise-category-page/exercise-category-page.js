import React from 'react';
import ExerciseCategoryBlocks from '../../exercise-category-blocks';

const ExerciseCategoryPage = () => {
  
  return (
    <section className="section-exercise-categories">
      <h1>Розвиваючі вправи</h1>
      <p className="lead">Великий вибір найкорисніших вправ та ігр для розвитку різного типу навичок.</p>

      <ExerciseCategoryBlocks />
    </section>
  );
};

export default ExerciseCategoryPage;