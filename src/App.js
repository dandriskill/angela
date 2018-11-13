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
import { database } from './config/constants';

import './assets/styles/App.css';

// Private route wrapper
const PrivateRoute = ({component: Component, authed, deezProps, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} {...deezProps} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
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
  );
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
    name: '',
    email: '',
    bio: '',
  }

  componentDidMount() {
    database.ref("/").on('value', snapshot => {
      const {
        name,
        email,
        bio,
      } = snapshot.val();
      this.setState({
        name,
        email,
        bio
      });
    });

    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
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

    const {
      name,
      email,
      bio,
    } = this.state;

    return this.state.loading === true ? <h1>Loading</h1> : (
      <Router>
        <div className="App">
          <div className="App-content">
            <Nav
              authed={this.state.authed}
              logout={logout}
              name={name}
            />
            <div className="content-container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Carousel images={DummyGallery} />}
                />
                <Route
                  path="/bio"
                  render={() => <Bio bio={bio} />}
                />
                <Route
                  path="/gallery"
                  render={() => <Gallery images={DummyGallery} />}
                />
                <Route
                  path="/contact"
                  render={() => <Contact name={name} email={email} />}
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
                  deezProps={{
                    name,
                    email,
                    bio,
                  }}
                />
              </Switch>
            </div>
          </div>
          <footer>
            <Footer name={name} />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
