import { faBed, faHiking, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import bgImage from '../../../images/fullwidth-bg.jpg';

const extraStyles = makeStyles({
  bgImageStyles: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundPosition: 'center',
    WebkitBackgroundSize: 'cover',
    backgroundSize: 'cover',
  }
})

const ExtraFacilities = () => {
  const { bgImageStyles } = extraStyles();
  return (
    <Box className={bgImageStyles} p={5}>
      <Box sx={{fontSize: '30px', color: '#003a6c', textAlign: 'center'}}>Extra Privileges</Box>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box p={2} borderRight="2px solid #003a6c">
            <Box sx={{fontSize: '3rem', color: '#003a6c', py: 3}}>
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </Box>
            <Box color="#003a6c" fontSize="20px" fontWeight={700} pb={3}>
              Flight Tickets
            </Box>
            <Box>Dummy text ever since the very 1500s, when an unknown printer took.</Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Box p={2} borderRight="2px solid #003a6c">
            <Box sx={{fontSize: '3rem', color: '#003a6c', py: 3}}>
              <FontAwesomeIcon icon={faBed} />
            </Box>
            <Box color="#003a6c" fontSize="20px" fontWeight={700} pb={3}>
              Hotel Reservation
            </Box>
            <Box>A galley of type and scrambled it to make a type specimen book it to make.</Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Box p={2}>
            <Box sx={{fontSize: '3rem', color: '#003a6c', py: 3}}>
              <FontAwesomeIcon icon={faHiking} />
            </Box>
            <Box color="#003a6c" fontSize="20px" fontWeight={700} pb={3}>
              Best Place To Hiking
            </Box>
            <Box>A galley of type and scrambled it to make a type specimen book it to make.</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExtraFacilities;