import React, { useState,useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { Redirect, Link, useHistory } from 'react-router-dom';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '163886591098-gqtuj8mu7i8ld8rgpp47fcggkq9apgah.apps.googleusercontent.com';

function GoogleLogin() {
  const [redirctTo, setRedirctTo] = useState(false);
  let history = useHistory();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully Welcome ${res.profileObj.name} 😍.`
    );
    console.log('Current user GoogleId or Tokenid:', res.profileObj.googleId);
    refreshTokenSetup(res);
    if(res.profileObj.googleId)
        setRedirctTo(true);
    
  };
  useEffect(()=>{
    console.log(redirctTo);
    if(redirctTo){
        history.push("/dashboard");
    }
  }, [redirctTo]);

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 `
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button type="button" onClick={signIn} className="btn btn-block btn-google auth-form-btn">
        <i className="mdi mdi-google mr-2"></i><span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default GoogleLogin;