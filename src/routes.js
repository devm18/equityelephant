import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Home from './componentContents/Home';
// articles 
import Articles from './componentContents/Articles';
import Beware from './componentContents/Articles/Beware';
import TaxWriteOff from './componentContents/Articles/TaxWriteOff';
import InterestCosts from './componentContents/Articles/InterestCosts';
import InvestOrPrepay from './componentContents/Articles/InvestOrPrepay';
import Imagine from './componentContents/Articles/Imagine';

import Glossary from './componentContents/Glossary';
import About from './componentContents/About';
import Contact from './componentContents/Contact';

import Calculator from './calculator/Calculator';

// imported into App.js
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    
    <Route exact path='/articles' component={Articles} />
    
    <Route path='/articles/bewareofdebtshuffleprograms' component={Beware} />
    
    <Route path='/articles/taxwriteoffmyth' component={TaxWriteOff} />
    
    <Route path='/articles/interestcostsandprepayment' component={InterestCosts} />
    
    <Route path='/articles/investorprepaymortgage' component={InvestOrPrepay} />
    
    <Route path='/articles/imagine' component={Imagine} />

    <Route path='/glossary' component={Glossary} />

    {/* use exact or put "/about/contact" above "/about" */}
    <Route exact path='/about' component={About} /> 

    <Route path='/about/contact' component={Contact} /> 
    
    <Route path='/calculator' component={Calculator} /> 

    <Route path='*' render={() => <div>404 Not Found!</div>} />

  </Switch>
)