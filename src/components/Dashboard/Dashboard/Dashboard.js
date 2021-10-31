import { Grid, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import AddANewPackage from '../AddANewPackage/AddANewPackage';
import DashboardAside from '../DashboardAside/DashboardAside';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import { UserContext } from '../../../App';

const Dashboard = () => {
  const matchesMediaQuery = useMediaQuery('(min-width:960px)');

  // For MyOrder Component
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serverResponse, setServerResponse] = useState();

  useEffect(() => {
    fetch('https://scary-vampire-55400.herokuapp.com/orders?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data));
  }, [loggedInUser.email, serverResponse]);

  // For Manage All Order Component
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch('https://scary-vampire-55400.herokuapp.com/allOrders')
    .then(res => res.json())
    .then(data => setAllOrders(data));
  }, [serverResponse]);
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      {/* Aside */}
      {
        matchesMediaQuery ?
        <Box sx={{bgcolor: '#003a6c', minWidth: '20%'}}>
          <DashboardAside></DashboardAside>
        </Box>
        :
        <Box sx={{bgcolor: '#003a6c'}}>
          <DashboardAside></DashboardAside>
        </Box>
      }

      {/* Main */}
      <Box minWidth="80%" minHeight="60vh" maxWidth="90%">
        <Route path="/dashboard/myOrders">
          <MyOrders orders={orders} setServerResponse={setServerResponse}></MyOrders>
        </Route>
        <Route path="/dashboard/manageAllOrders">
          <ManageAllOrders allOrders={allOrders} setServerResponse={setServerResponse}></ManageAllOrders>
        </Route>
        <Route path="/dashboard/addANewPackage">
          <AddANewPackage setServerResponse={setServerResponse}></AddANewPackage>
        </Route>
      </Box>
    </Box>
  );
};

export default Dashboard;