import React from 'react';

const Contact = (props) => (
  <div>
    <h4>
      Name
    </h4>
    <input
      type="text"
      value={props.name}
      onChange={props.handleNewContactInfo}
    />
    <h4>
      Contact Email
    </h4>
    <input
      type="text"
      value={props.contactEmail}
      onChange={props.handleNewContactInfo}
    />
  </div>
);

export default Contact;
