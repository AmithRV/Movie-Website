import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import './App.css';
import Movies from "./components/Movies";
import Trending from "./components/Trending";
import Tv_Shows from "./components/TV_Shows";
import MovieProfile from "./components/MovieProfile";

function App() 
{ 
 return(
        <div className="App">
            <Router>
              <Header/>
              <Switch>
                <Route path="/"   exact component={ Home }/>
                <Route path="/home"     exact component={ Home }/>
                <Route path="/tv_shows" exact component={ Tv_Shows }/>
                <Route path="/movies"   exact component={ Movies }/>
                <Route path="/trending" exact component={ Trending }/>

                <Route path="/details/movie/:id"   exact component={ MovieProfile }/>

                <Route> 404 Not Found</Route>
              </Switch>
          </Router>          
        </div>
      );
}

export default App;