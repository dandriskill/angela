import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Carousel from './components/pages/Carousel';
import Bio from './components/pages/Bio';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

import './assets/styles/App.css';

class App extends Component {
  render() {
    const DummyImages = [
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
    ];
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
                  render={() => <Carousel images={DummyImages} isAuthed={true} />}
                />
                <Route
                  path="/bio"
                  component={Bio}
                />
                <Route
                  path="/gallery"
                  component={Gallery}
                />
                <Route
                  path="/contact"
                  component={Contact}
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
