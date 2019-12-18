import React from 'react';
import './App.css'
import { Link, Switch, Route } from 'react-router-dom'

import RandomDog from './Components/RandomDog'
import RandomDogBreed from './Components/RandomDogBreed'
import RandomCat from './Components/RandomCat'
import NotFound from './Components/NotFound'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/dog/random">Random Dog</Link>{" "}
          <Link to="/dog/random/3">Random Dogs</Link>{" "}
          <Link to="/dog/husky">Random Dog by Breed</Link>{" "}
          <Link to="/cat/random">Random Cat</Link>{" "}
          <Link to="/cat/random/3">Random Cats </Link>{" "}
        </nav>

        <Switch>
          <Route path="/dog/random/:num" component={RandomDog} />
          <Route path="/dog/random" component={RandomDog} />
          <Route path="/dog/:breed" component={RandomDogBreed} />

          <Route path="/cat/random/:num" component={RandomCat} />
          <Route path="/cat/random/" component={RandomCat} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

}
export default App;
