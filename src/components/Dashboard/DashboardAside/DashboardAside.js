import { faPlus, faSignOutAlt, faTasks, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { getAuth, signOut } from "firebase/auth";
import '../../Login/Login/firebase.config';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { Tooltip, useMediaQuery } from '@mui/material';

// Custom Styles
const asideStyles = makeStyles({
  asideColors: {
    '& a': { color: 'white' }
  },

  asideActive: {
    backgroundColor: 'white !important',

    '& a': {
      color: '#003a6c !important',
    }
  },

  hoverEffect: {
    backgroundColor: '#003a6c',
    color: 'white',
    cursor: 'pointer',

    '& a': {
      color: 'white',
    },

    '&:hover': {
      backgroundColor: 'white',
      color: '#003a6c',

      '& a': {
        color: '#003a6c',
      }
    }
  }
})

const DashboardAside = () => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { asideActive, hoverEffect, asideColors } = asideStyles();
  const matchesMediaQuery = useMediaQuery('(min-width:960px)');

  // Checking Routes
  const params = useParams("/dashboard/:dynamic");
  const isMyOrders = params.dynamic === "myOrders";
  const isManageAllOrders = params.dynamic === "manageAllOrders";
  const isAddANewPackage = params.dynamic === "addANewPackage";

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setLoggedInUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('displayName');
      localStorage.removeItem('email');
      localStorage.removeItem('photoURL');
      alert("Logged out successfully!");
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  const asideListFunction = (typeName, icon, mainName) => {
    return (
      <Link to={`/dashboard/${typeName}`}>
        <Box sx={{display: 'flex', alignItems: 'center', fontSize: '18px'}} id={typeName}>
          <Box sx={{p: 2}}>
            <FontAwesomeIcon icon={icon} />
          </Box>
          {
            matchesMediaQuery &&
            <Box>
              {mainName}
            </Box>
          }
        </Box>
      </Link>
    );
  }
  return (
    <Box sx={{minHeight: '100%', width: '100%'}} className={asideColors}>
      <Tooltip title="My Orders" placement="right" arrow>
        <Box className={`${hoverEffect} ${isMyOrders && asideActive}`}>
          {asideListFunction("myOrders", faThList, "My Bookings")}
        </Box>
      </Tooltip>
      <Tooltip title="Manage All Orders" placement="right" arrow>
        <Box className={`${hoverEffect} ${isManageAllOrders && asideActive}`}>
          {asideListFunction("manageAllOrders", faTasks, "Manage All Bookings")}
        </Box>
      </Tooltip>
      <Tooltip title="Add A New Package" placement="right" arrow>
        <Box className={`${hoverEffect} ${isAddANewPackage && asideActive}`}>
          {asideListFunction("addANewPackage", faPlus, "Add A New Package")}
        </Box>
      </Tooltip>
      <Tooltip title="Logout" placement="right" arrow>
        <Box className={hoverEffect} onClick={handleLogOut}>
          <Box sx={{display: 'flex', alignItems: 'center', fontSize: '18px'}}>
            <Box sx={{p: 2}}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Box>
            {
              matchesMediaQuery &&
              <Box>
                Logout
              </Box>
            }
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default DashboardAside;