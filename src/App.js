import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Carousel from './components/pages/Carousel';
import Bio from './components/pages/Bio';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AdminPanel from './components/adminPanel/AdminPanel';
import Footer from './components/Footer';

import { logout } from './helpers/auth';
import { firebaseAuth } from './config/constants';

import './assets/styles/App.css';

// Private route wrapper
const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

// Public route wrapper
const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/admin' />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {

    const DummyGallery = [
      {
        url: "https://via.placeholder.com/400x200",
        alt: "artwork-placeholder",
        name: "Artpiece 1",
      },
      {
        url: "https://via.placeholder.com/400x200",
        alt: "artwork-placeholder",
        name: "Artpiece 2",
      },
      {
        url: "https://via.placeholder.com/400x200",
        alt: "artwork-placeholder",
        name: "Artpiece 3",
      },
      {
        url: "https://via.placeholder.com/400x200",
        alt: "artwork-placeholder",
        name: "Artpiece 4",
      },
    ];

    const DummyBio = "My name is Angela Heirtzler, and I'm the most amazing artist in history! Take that, Picaso!";

    const DummyContact = {
      name: 'Angela Heirtzler',
      email: 'angela@angelaheirtzler.com',
    };

    return this.state.loading === true ? <h1>Loading</h1> : (
      <Router>
        <div className="App">
          <div className="App-content">
            <Nav authed={this.state.authed} logout={logout} />
            <div className="content-container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Carousel images={DummyGallery} />}
                />
                <Route
                  path="/bio"
                  render={() => <Bio bio={DummyBio} />}
                />
                <Route
                  path="/gallery"
                  render={() => <Gallery images={DummyGallery} />}
                />
                <Route
                  path="/contact"
                  render={() => <Contact contactInfo={DummyContact} />}
                />
                <Route
                  path="/register"
                  render={() => <Register />}
                />
                <PublicRoute
                  path="/login"
                  component={Login}
                  authed={this.state.authed}
                />
                <PrivateRoute
                  path="/admin"
                  component={AdminPanel}
                  authed={this.state.authed}
                />
              </Switch>
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
