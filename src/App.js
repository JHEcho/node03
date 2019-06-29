import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
// Routes
import Data01Component from './routes/Data01';
import AboutComponent from './routes/About';
import Data02Component from './routes/Data02';
import PageNotFound from './routes/PageNotFound';
// Components
import BottomNavComponent from './components/BottomNav';
import HeaderComponent from './components/Header';
import './App.scss';

export default function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={AboutComponent} />
        <Route path="/data-01" component={Data01Component} />
        <Route path="/data-02" component={Data02Component} />
        <Route component={PageNotFound} />
      </Switch>
      <BottomNavComponent />
    </div>
  );
}
