import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID;

function Logout({login}) {
  const onSuccess = () => {
    console.log('Logout Successful');
    localStorage.setItem('_login',false)
    login(false)
    alert('You logged out Successfully');
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      className="logout-btn"
    ></GoogleLogout>
  );
}

export default Logout;