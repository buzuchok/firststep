import React from 'react';
import Row from '../../ui/row';
import HomeExerciseCategoryList from '../../home-exercise-category-list';
import RhymeCategoryList from '../../rhyme-category-list';
import './homepage.scss';

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="jumbotron wblock text-center">
        <h1>Ласкаво просимо до <small className="red">my</small>Firststep!</h1>
        <p>Пропонуємо вам зручний сервіс для пошуку вправ і потішок для ваших малят. <br/>Зареєстровані користувачі можуть додавати вподобані матеріали в закладки.</p>
      </div>

      {/* <Row 
        left={<HomeExerciseCategoryList />}
        // center={<p>right</p>}
        right={<RhymeCategoryList />}
      /> */}

      <HomeExerciseCategoryList />

      <RhymeCategoryList />

    </section>
  );
};

export default Homepage;