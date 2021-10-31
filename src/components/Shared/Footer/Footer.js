import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{bgcolor: '#240046', color: 'white'}}>
      <Container maxWidth="lg">
        <Grid container sx={{alignItems: 'center'}}>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, '& div': {lineHeight: 2.5}}}>
              <Typography component="h6" variant="h6" sx={{py: 2}}>VACATION PACKAGE</Typography>
              <Box>Las Vegas Vacations</Box>
              <Box>Orlando Vacations</Box>
              <Box>New York Vacations</Box>
              <Box>Miami Vacations</Box>
              <Box>San Diego Vacations</Box>
              <Box>San Francisco Vacations</Box>
              <Box>Los Angeles Vacations</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, '& div': {lineHeight: 2.5}}}>
              <Typography component="h6" variant="h6" sx={{py: 2}}>BOOKING TICKETS</Typography>
              <Box>Sydney Hotels</Box>
              <Box>Boston Hotels</Box>
              <Box>Walt Disney World</Box>
              <Box>Las Vegas Hotels</Box>
              <Box>Maui Hotels</Box>
              <Box>New York Hotels</Box>
              <Box>San Francisco Hotels</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{py: 3}}>
              <Link to="/">
                <Box sx={{py: 3, fontSize: 24}}>
                  <Box sx={{color: '#f2f2f2'}}>
                    Travelsy
                    <FontAwesomeIcon icon={faRoute} />
                  </Box>
                </Box>
              </Link>
              <Box fontSize="18px" lineHeight="1.5">Start planning the trip of your dreams with the help of 1000+ articles on trivago magazine, ranging from the coolest hotels in New York to romantic getaways in Florida and everything in between.</Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{width: '100%', height: '1px', bgcolor: 'white'}}></Box>
      <Container maxWidth="lg">
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3}}>
          <Box>Chanda Biswas © {new Date().getFullYear()} All Rights Reserved</Box>
          <Box sx={{fontSize: '30px', '& svg': {paddingLeft: '10px'}, display: 'flex', alignItems: 'center'}}>
            <Typography component="span" variant="h5">Follow Us:&nbsp;</Typography>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;