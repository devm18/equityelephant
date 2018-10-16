import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

// navbar 
import About from './componentContents/About';
import Articles from './componentContents/Articles';
import Calculator from './calculator/Calculator';
import Glossary from './componentContents/Glossary';
import Home from './componentContents/Home';
// sub navbar  
import Contact from './componentContents/Contact';
// articles 
import Beware from './componentContents/Articles/Beware';
import TaxWriteOff from './componentContents/Articles/TaxWriteOff';
import InterestCosts from './componentContents/Articles/InterestCosts';
import InvestOrPrepay from './componentContents/Articles/InvestOrPrepay';
import Imagine from './componentContents/Articles/Imagine';

// imported into App.js
export default (
  <Switch>
    {/* use the exact keyword and/or post "/about/contact" above "/about" */}
    <Route exact path='/about/contact' component={Contact} /> 
    <Route path='/about' component={About} /> 
    <Route path='/calculator' component={Calculator} /> 
    
    {/* use the exact keyword and/or post "/about/contact" above "/about" */}
    <Route exact path='/articles' component={Articles} />
    <Route path='/articles/bewareofdebtshuffleprograms' component={Beware} />
    <Route path='/articles/taxwriteoffmyth' component={TaxWriteOff} />
    <Route path='/articles/interestcostsandprepayment' component={InterestCosts} />
    <Route path='/articles/investorprepaymortgage' component={InvestOrPrepay} />
    <Route path='/articles/imagine' component={Imagine} />

    <Route path='/glossary' component={Glossary} />
    <Route exact path='/' component={Home} />
    <Route path='*' render={() => <div>404 Not Found!</div>} /> 
  </Switch>
)