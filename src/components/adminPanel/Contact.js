import React from 'react';

const Contact = (props) => (
  <div>
    <h4>
      Name
    </h4>
    <input
      type="text"
      defaultValue={props.name}
      onChange={props.handleNewName}
    />
    <h4>
      Contact Email
    </h4>
    <input
      type="text"
      defaultValue={props.email}
      onChange={props.handleNewEmail}
    />
  </div>
);

export default Contact;
