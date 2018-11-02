import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
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
      <div className="App">
        <header className="App-header">
          <Router>
            <Fragment>
              <Nav />
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
            </Fragment>
          </Router>
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
