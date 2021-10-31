import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import '../Login/firebase.config';
import { UserContext } from '../../../App';
import { useLocation, useHistory } from 'react-router-dom';

const GoogleLogin = ({ setLoginError }) => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // useHistory hook
  const history = useHistory();
  const location = useLocation();
  const redirectURI = location.state?.from || "/";

  const handleSignIn = () => {
    setLoginError(null);
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        const { accessToken, displayName, email, photoURL } = user;
        setLoggedInUser({ accessToken, displayName, email, photoURL });
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('email', email);
        localStorage.setItem('photoURL', photoURL);
        history.push(redirectURI);

        console.log(token);
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // ...
        setLoginError(errorMessage);
      });
  }
  console.log(loggedInUser);
  return (
    <Box sx={{minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{display: 'flex', justifyContent: 'center', color: '#4285F4', my: 3}}>
        <Box sx={{border: '1px solid #4285F4', borderRadius: '50rem', '&:hover': {cursor: 'pointer'}}} onClick={handleSignIn}>
          <Box sx={{p: 2, display: 'flex', alignItems: 'center'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontSize: '30px', bgcolor: 'white', padding: '5px', width: '36px', height: '36px'}}>
              <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </Box>
            <Box sx={{display: 'inline-block', mx: 3, px: 3, fontSize: '20px'}}>Continue with Google</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GoogleLogin;