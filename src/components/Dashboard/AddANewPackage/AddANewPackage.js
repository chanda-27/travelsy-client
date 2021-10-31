import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CircularProgress, Grid, Input, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const AddANewPackage = ({ setServerResponse }) => {
  // State for storing all package data
  const [packageDetails, setPackageDetails] = useState({
    packageName: "",
    packageDescription: "",
    packagePrice: 0,
    packageImage: "",
    tripDuration: 0,
  });

  const [uploadImageDetail, setUploadImageDetail] = useState(false);

  // Random Day Selection Function Between 3 - 7 Days
  const randomDay = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const packageData = {
      packageName: packageDetails.packageName,
      packageDescription: packageDetails.packageDescription,
      packagePrice: packageDetails.packagePrice,
      packageImage: packageDetails.packageImage,
      tripDuration: randomDay(3, 7),
    }
    console.log("Inside handleSubmit", packageData);
    const serverURL = 'https://scary-vampire-55400.herokuapp.com/addPackage';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(packageData)
    })
    .then(res => res.json())
    .then(data => {
      setPackageDetails({
        packageName: "",
        packageDescription: "",
        packagePrice: '',
        packageImage: "",
        tripDuration: 0,
      });
      setServerResponse({response: data});
    });
  }

  const handleChange = (event) => {
    event.preventDefault();
    event.target.name === 'name' &&
    setPackageDetails({ ...packageDetails, packageName: event.target.value });
    event.target.name === 'price' &&
    setPackageDetails({ ...packageDetails, packagePrice: (event.target.value * 1).toFixed(2) });
    event.target.name === 'description' &&
    setPackageDetails({ ...packageDetails, packageDescription: event.target.value });
  }

  // On Change Image Upload Handler
  const handleImageUpload = (event) => {
    event.preventDefault();
    event.target.files.length && setUploadImageDetail(true);

    console.log("Inside handleImageUpload", event.target.files);
    const imageData = new FormData();
    imageData.set('key', 'b373b317b63fb4939f325af937793ecc');
    imageData.append('image', event.target.files[0]);

    // Axios Fetching
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setPackageDetails({ ...packageDetails, packageImage: response.data.data.display_url });
      console.log(response.data.data.display_url);
      response.data.data.display_url.length > 0 && setUploadImageDetail(false);
    })
    .catch(function (error) {
      console.log(error);
      setUploadImageDetail(false);
    });
  }

  console.log("packageDetails state", packageDetails);

  const ImageFileInput = () => {
    return (
      <Box p={1}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageUpload} />
          <Button variant="outlined" component="span" sx={{width: '100%'}}>
            Add Photo
          </Button>
        </label>
      </Box>
    );
  }
  
  const Spinner = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
        <Box pl={2}>File is uploading... Please wait...</Box>
      </Box>
    );
  }

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Box p={3}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="name" name="name" label="Package Name" variant="standard" sx={{width: '100%'}} value={packageDetails.packageName} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="price" name="price" label="Package Price" variant="standard" sx={{width: '100%'}} defaultValue={packageDetails.packagePrice} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="description" name="description" label="Description" variant="standard" sx={{width: '100%'}} multiline rows={4} value={packageDetails.packageDescription} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Spinner with toggler */}
              {
                !uploadImageDetail && <ImageFileInput></ImageFileInput>
              }
              {
                uploadImageDetail && <Spinner></Spinner>
              }
              {/* Spinner with toggler */}
            </Grid>
          </Grid>
          <Box sx={{display: 'flex', justifyContent: 'center', py: 3}}>
            <Button variant="contained" type="submit" sx={{fontSize: '18px', py: 1, px: 5}}>
              <FontAwesomeIcon icon={faSave} />&nbsp;
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddANewPackage;