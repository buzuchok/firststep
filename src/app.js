import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout';
import Homepage from './components/pages/homepage';
import ExerciseCategoryPage from './components/pages/exercise-category-page';

export const AuthContext = React.createContext(false);

export default class App extends Component {

  state = {
    auth: false
  }

  

  render () {
    let routes = (
      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/exercise' component={ExerciseCategoryPage} exact />
        {/* <Route path='/exercise' component={ExerciseCategoryPage} exact /> */}
        <Route path='/rhyme' render={() => <h1>Потішки</h1>} exact />
      </Switch>
    );

    

    return (
      <AuthContext.Provider value={this.state.auth}>
        <Router>
          <Layout>
            {routes}
          </Layout>
        </Router>
      </AuthContext.Provider>
    );
  }
}

