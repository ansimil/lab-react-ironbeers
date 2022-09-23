import Home from './components/Home'
import Header from './components/Header';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeerDetails from './components/BeerDetails'

import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Header/>

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/beers' element={<Beers />} />
    <Route path='/random-beer' element={<RandomBeer />} />
    <Route path='/new-beer' element={<NewBeer />} />
    <Route path='/beers/:beerId' element={<BeerDetails />} /> 


    </Routes>
    </div>
  );
}

export default App;
