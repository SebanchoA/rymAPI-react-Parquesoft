import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import RickAndMorty from './componentes/rick-and-morty';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RickAndMorty/>}/>
      </Routes>
    </Router>
  );
}

export default App;