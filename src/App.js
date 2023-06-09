import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Profile from './components/Profile';
import Footer from './components/Footer/Footer';

const initialState = {
  route: 'signin', //signin
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    }
    else if(route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        {
          (route === 'home')
          ? <div>
              <React.Fragment>
                <Navbar onRouteChange={this.onRouteChange} />
                <Switch>
                  <Route exact path="/" component={ProductList} />
                  <Route path="/details" component={Details} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/profile" 
                    render={() => <Profile user={this.state.user} /> }
                   />
                  <Route component={Default} />
                </Switch>
                <Modal />
                <Footer/>
              </React.Fragment>
            </div>
          : (
              (route === 'signin' || route === 'signout')
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }    
      </div>
    );
  }
}

export default App;
