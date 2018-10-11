import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import About from './componentContents/About';
import Articles from './componentContents/Articles';
import Contact from './componentContents/Contact';
import Glossary from './componentContents/Glossary';
import Home from './componentContents/Home';

import Calculator from './calculator/Calculator';



// imported into App.js
export default (
  <Switch>
    <Route exact path='/about/contact' component={Contact} /> 
    {/* use the exact keyword and/or post "/about/contact" above "/about" */}
    <Route path='/about' component={About} /> 
    <Route path='/calculator' component={Calculator} /> 
    <Route path='/articles' component={Articles} />
    <Route path='/glossary' component={Glossary} />
    <Route exact path='/' component={Home} />
    <Route path='*' render={() => <div>404 Not Found!</div>} /> 
  </Switch>
)