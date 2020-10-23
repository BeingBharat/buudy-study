import React from 'react';
import './App.css';
import MoviesList from './components/MoviesListScreen';
import SignInScreen from './components/SignInScreen';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Switch>

   <Route path='/' strict exact component={SignInScreen} />
   <Route path='/movieslist' exact component={MoviesList} />
 </Switch>

 </BrowserRouter>
    </div>
  );
}

export default App;
