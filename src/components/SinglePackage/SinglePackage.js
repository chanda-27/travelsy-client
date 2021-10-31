import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const SinglePackage = ({ packege, setPackege, orderInfo, setOrderInfo }) => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id, packageName, packageDescription, packageImage, packagePrice, tripDuration } = packege;

  // useHistory
  const history = useHistory();

  // Date Functions
  const handleChange = (newValue) => {
    setOrderInfo({ ...orderInfo, date: newValue });
  };

  // Get URL parameters
  const { packageId } = useParams();
  useEffect(() => {
    fetch(`https://scary-vampire-55400.herokuapp.com/package/${packageId}`)
      .then(res => res.json())
      .then(data => {
        setPackege(data);
      });
  }, [packageId, setOrderInfo, setPackege]);
  console.log("Order Info", orderInfo);

  const handleOrder = () => {
    orderInfo.packegeId = _id;
    orderInfo.packageName = packageName;
    orderInfo.packagePrice = packagePrice;
    orderInfo.tripDuration = tripDuration;
    orderInfo.ownerName = loggedInUser.displayName;
    orderInfo.ownerEmail = loggedInUser.email;
    console.log(orderInfo);

    // Send Orders
    fetch('https://scary-vampire-55400.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderInfo)
    })
    .then(res => res.json())
    .then(data => {data.acknowledged && alert("Your order placed successfully! Thank you"); history.push("/dashboard/myOrders")})
    .catch(error => console.log(error));
  }
  return (
    <Box>
      <Box sx={{bgcolor: '#f0f8ff', py: 8}}>
        <Container maxWidth="lg">
          <Box sx={{mx: 'auto', maxWidth: '65%', '& img': {width: '100%', borderRadius: '10px'}}}>
            <img src={packageImage} alt={packageName} />
          </Box>
        </Container>
      </Box>
      <Box sx={{bgcolor: 'white', p: 3}}>
        <Box sx={{textAlign: 'center', py: 5}}>
          <Typography component="h1" variant="h2" sx={{color: '#122136'}}>{packageName}</Typography>
          <Typography component="span" sx={{fontSize: '17px', color: '#122136', maxWidth: '65%'}}>{packageDescription}</Typography>
        </Box>
        <Box p={2}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '24px', bgcolor: '#003a6c', p: 3, borderRadius: '50rem 0', color: 'white'}}>
            <Box fontWeight={700}>Bill To:</Box>
            <Box>{loggedInUser.displayName}</Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '20px', p: 3, borderRadius: '0 50rem 0 0', color: '#01abff', border: '1px solid #fdce4b'}}>
            <Box fontWeight={700}>Email:</Box>
            <Box sx={{textTransform: 'none'}}>{loggedInUser.email}</Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '20px', p: 3, color: '#01abff', border: '1px solid #fdce4b'}}>
            <Box fontWeight={700}>Trip Start Date:</Box>
            <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Pick a Date"
                  inputFormat="MM/dd/yyyy"
                  value={orderInfo.date}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '20px', p: 3, color: '#01abff', border: '1px solid #fdce4b'}}>
            <Box fontWeight={700}>Price:</Box>
            <Box>${packagePrice}</Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', p: 3, borderRadius: '0 0 0 50rem', color: '#01abff', border: '1px solid #fdce4b'}}>
            <Button sx={{ fontSize: '20px' }} onClick={handleOrder}>Checkout</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePackage;