import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Carousel from './components/pages/Carousel';
import Bio from './components/pages/Bio';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Footer from './components/Footer';

import './assets/styles/App.css';

class App extends Component {
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

    const DummyBio = "My name is Angela Walker, and I'm the most amazing artist in history! Take that, Picaso!";

    const DummyContact = {
      name: 'Angela Walker',
      email: 'angela@angelawalker.com',
    };

    return (
      <Router>
        <div className="App">
          <div className="App-content">
            <Nav />
            <div className="content-container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Carousel images={DummyGallery} isAuthed={true} />}
                />
                <Route
                  path="/bio"
                  render={() => <Bio bio={DummyBio} isAuthed={true} />}
                />
                <Route
                  path="/gallery"
                  render={() => <Gallery images={DummyGallery} isAuthed={true} />}
                />
                <Route
                  path="/contact"
                  render={() => <Contact contactInfo={DummyContact} isAuthed={true} />}
                />
                <Route
                  path="/login"
                  component={Login}
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
