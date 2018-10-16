import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

import './CSS/reset.css'; 
import './CSS/app.css';
import './CSS/componentParts.css';
import './CSS/componentContents.css';
import './CSS/calculator.css'; 

import Header from './componentParts/Header'; 
import NavBar from './componentParts/NavBar'; 
import Footer from './componentParts/Footer'; 


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="app">
            
            <Header />
           
            <NavBar /> 
           
            <div id="main-body">
              { routes }
            </div>
                        
            <Footer /> 

          </div>
        </BrowserRouter>
      </Provider>    
    );
  }
}

export default App;


