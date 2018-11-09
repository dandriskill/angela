import React from 'react';

const ChangePasswordEmail = (props) => (
  <div>
    <h4>
      Change Email
    </h4>
    <input
      type="text"
      value={props.email}
      onChange={props.handleNewPasswordEmail}
    />
    <h4>
      Change Password
    </h4>
    <input
      type="text"
      value={props.password}
      onChange={props.handleNewPasswordEmail}
    />
  </div>
);

export default ChangePasswordEmail;
