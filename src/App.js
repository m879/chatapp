import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Error from './components/Error';
import Save from './components/Save';
import Profile from './components/Profile';
// import Navigation from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'semantic-ui-css/semantic.min.css';



class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/chatapp/" component={Home} exact/>
             <Route path="/" component={Home} exact/>
             <Route path="/home" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/save" component={Save}/>
             <Route path="/profile" component={Profile}/>
            {/* <Route component={Error}/> */}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;