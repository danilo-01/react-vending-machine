import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/soda">
          <Snack sname="soda" description="Some coca-cola?"/>
        </Route>
        <Route exact path="/chips">
          <Snack sname="chips" description="Heres some lays"/>
        </Route>
        <Route exact path="/sardines">
          <Snack sname="sardines" description="GROSSSSS"/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
