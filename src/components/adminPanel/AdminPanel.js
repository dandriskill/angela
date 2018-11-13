import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';

import Bio from './Bio';
import Contact from './Contact';

import { write } from '../../helpers/db';

import '../../assets/styles/AdminPanel.css';

const PropTypes = {
  name: string.isRequired,
  email: string.isRequired,
  bio: string.isRequired,
};

class AdminPanel extends Component {
  state = {
    name: '',
    email: '',
    bio: '',
    submitted: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        name: this.props.name,
        email: this.props.email,
        bio: this.props.bio,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      bio,
      name,
      email,
    } = this.state;
    if (bio && name && email) {
      this.setState({ submitted: true }, () => {
        write({
          bio,
          name,
          email,
        });
      });
      document.title = name;
    }
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

AdminPanel.propTypes = PropTypes;

export default AdminPanel;
