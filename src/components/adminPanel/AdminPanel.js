import React, { Component, Fragment } from 'react';

import UploadImage from './UploadImage';
import Bio from './Bio';
import Contact from './Contact';
import CarouselOrder from './CarouselOrder';
import ChangePasswordEmail from './ChangePasswordEmail';

import '../../assets/styles/AdminPanel.css';

class AdminPanel extends Component {
  state = {
    image: '',
    bio: '',
    contact: {
      name: '',
      contactEmail: '',
    },
    carouselOrder: [],
    account: {
      password: '',
      email: '',
    },
    submitted: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  handleUploadImage = ({ image }) => {
    this.setState({
      image,
      submitted: false,
    });
  }

  handleNewBio = ({ bio }) => {
    this.setState({
      bio,
      submitted: false,
    });
  }

  handleNewContactInfo = ({ name, contactEmail }) => {
    this.setState({
      contact: {
        name,
        contactEmail,
      },
      submitted: false,
    });
  }

  handleNewCarouselOrder = ({ carouselOrder }) => {
    this.setState({
      carouselOrder,
      submitted: false,
    });
  }

  handleNewPasswordEmail = ({ password, email }) => {
    this.setState({
      account: {
        password,
        email,
      },
      submitted: false,
    });
  }

  render() {
    const {
      image,
      bio,
      contact: {
        name,
        contactEmail,
      },
      carouselOrder,
      account: {
        password,
        email,
      },
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
              <UploadImage
                handleUploadImage={this.handleUploadImage}
                image={image}
              />
              <Bio
                handleNewBio={this.handleNewBio}
                bio={bio}
              />
              <Contact
                handleNewContactInfo={this.handleNewContactInfo}
                name={name}
                contactEmail={contactEmail}
              />
            </div>
            <div className="admin-panel-flex-item">
              <ChangePasswordEmail
                handleNewPasswordEmail={this.handleNewPasswordEmail}
                password={password}
                email={email}
              />
            </div>
          </div>
          <CarouselOrder
            handleNewCarouselOrder={this.handleNewCarouselOrder}
            carouselOrder={carouselOrder}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AdminPanel;
