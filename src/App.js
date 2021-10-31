import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import SinglePackage from './components/SinglePackage/SinglePackage';
import { CircularProgress, useMediaQuery } from '@mui/material';
import ExtraHeader from './components/Shared/ExtraHeader/ExtraHeader';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { Box } from '@mui/system';

export const UserContext = createContext();

function App() {
  const accessToken = localStorage.getItem('accessToken');
  const displayName = localStorage.getItem('displayName');
  const email = localStorage.getItem('email');
  const photoURL = localStorage.getItem('photoURL');
  const [loggedInUser, setLoggedInUser] = useState( accessToken ? { accessToken, displayName, email, photoURL } : null );
  const matches960px = useMediaQuery('(min-width:960px)');
  console.log(loggedInUser);

  // Store Packeges
  const [packeges, setPackeges] = useState([]);
  const [packege, setPackege] = useState([]);

  const [orderInfo, setOrderInfo] = useState({
    ownerName: loggedInUser && loggedInUser.displayName,
    ownerEmail: loggedInUser && loggedInUser.email,
    packegeId: packege._id,
    packageName: packege.packageName,
    packagePrice: packege.packagePrice,
    tripDuration: packege.tripDuration,
    quantity: 1,
    date: new Date(),
    status: 'pending',
  });
  console.log("Single Package", packege);
  console.log("All Packages", packeges);
  console.log("Order Info", orderInfo);

  const Spinner = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
        <CircularProgress />
        <Box sx={{fontSize: '37px'}}>&nbsp;Loading... Please wait...</Box>
      </Box>
    );
  }

  if (packeges.length < 1) {
    const server = 'https://scary-vampire-55400.herokuapp.com/packages';
    fetch(server)
      .then(res => res.json())
      .then(data => setPackeges(data));
  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        { matches960px && <ExtraHeader></ExtraHeader> }
        <Header></Header>
        <Switch>
          <Route exact path="/">
            {
              packeges.length < 1 &&
              <Spinner></Spinner>
            }
            {
              packeges.length > 1 &&
              <Home packeges={packeges} setPackeges={setPackeges}></Home>
            }
          </Route>
          <PrivateRoute path="/package/:packageId">
            <SinglePackage packege={packege} setPackege={setPackege} orderInfo={orderInfo} setOrderInfo={setOrderInfo}></SinglePackage>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/:dynamic">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
