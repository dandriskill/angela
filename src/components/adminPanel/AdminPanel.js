import React, { Component, Fragment } from 'react';

import Bio from './Bio';
import Contact from './Contact';

import { write } from '../../helpers/db';

import '../../assets/styles/AdminPanel.css';

class AdminPanel extends Component {
  state = {
    bio: '',
    name: '',
    email: '',
    submitted: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      bio,
      name,
      email,
    } = this.state;
    this.setState({ submitted: true }, () => {
      write({
        bio,
        name,
        email,
      });
    });
  }

  handleNewBio = (e) => {
    this.setState({
      bio: e.target.value,
      submitted: false,
    });
  }

  handleNewName = (e) => {
    this.setState({
      name: e.target.value,
      submitted: false,
    });
  }

  handleNewEmail = (e) => {
    this.setState({
      email: e.target.value,
      submitted: false,
    });
  }

  render() {
    const {
      bio,
      name,
      email,
      submitted,
    } = this.state;

    return (
      <Fragment>
        {submitted &&
          <p>
            Submitted!
          </p>
        }
        <form onSubmit={this.handleSubmit} className="admin-panel-form">
          <div className="admin-panel-flex-container">
            <div className="admin-panel-flex-item">
              <Contact
                handleNewName={this.handleNewName}
                handleNewEmail={this.handleNewEmail}
                name={name}
                email={email}
              />
              <Bio
                handleNewBio={this.handleNewBio}
                bio={bio}
              />
            </div>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AdminPanel;
