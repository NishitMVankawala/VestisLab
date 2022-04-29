import React, { useState,useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useGoogleLogout } from 'react-google-login';
import { Trans } from 'react-i18next';
import { Redirect, Link, useHistory } from 'react-router-dom';

const clientId =
  '163886591098-gqtuj8mu7i8ld8rgpp47fcggkq9apgah.apps.googleusercontent.com';

function GoogleLogout() {
    const [redirctTo, setRedirctTo] = useState(false);
    let history = useHistory();
  console.log("Called >>>>>");
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully');
    setRedirctTo(true);
    console.log(res);
  };

  useEffect(()=>{
    console.log(redirctTo);
    if(redirctTo){
        history.push("/user-pages/login-1");
    }
  }, [redirctTo]);
  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Dropdown.Item onClick={signOut}>
        <i className="mdi mdi-logout mr-2 text-primary"></i>
        <Trans>Signout</Trans>
    </Dropdown.Item>
    // <button onClick={signOut} className="button">
    //   <img src="icons/google.svg" alt="google login" className="icon"></img>

    //   <span className="buttonText">Sign out</span>
    // </button>
  );
}

export default GoogleLogout;