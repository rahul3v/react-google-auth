import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login({login,userData}) {
  const onSuccess = (res) => {
    //console.log('Login Success: currentUser:', res);
    //console.log('Login Success: currentUser:', res.profileObj);
    login(true)
    window.localStorage.setItem('_login',true)
    userData(res.profileObj)
    alert(
      `Logged in successfully, Hello ${res.profileObj.givenName}`
    );
  };

  const onFailure = (res) => {
    console.log('Login failed response:', res);
    localStorage.setItem('_login',false)
    if(!window.navigator.onLine){
      alert(`You are offline`);
    } else {
      alert(`Failed to login, try again`);
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      style={{ margin: '10px' }}
      isSignedIn={true}
      className="login-btn"
    />
  );
}

export default Login;