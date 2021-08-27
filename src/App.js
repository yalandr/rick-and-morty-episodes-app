import React from 'react';
import './App.css';
import MyWatchList from './components/MyWatchList';
import EpisodesList from './components/EpisodesList';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <div className="episodes-app">
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={EpisodesList} />
            <Route exact path='/watchlist' component={MyWatchList} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
