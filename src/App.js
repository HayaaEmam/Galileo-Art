import React from 'react';
import './App.css';
import {Art} from './Components/Art'
import {About} from './Components/About'
import {Careers} from './Components/Careers'
import {Cart} from './Components/Cart'
import {Contact} from './Components/Contact'
import {Custom} from './Components/Custom'
import {Lookbook} from './Components/Lookbook'
import {Header} from './Components/Header'
import {Footer} from './Components/Footer'




import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Header/>
      <Switch>
        <Route path='/' component={Art} exact/>
        <Route path='/about' component={About}/>
        <Route path='/careers' component={Careers}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/custom' component={Custom}/>
        <Route path='/lookbook' component={Lookbook}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
