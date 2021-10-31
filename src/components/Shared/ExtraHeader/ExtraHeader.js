import { faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ExtraHeader = () => {
  return (
    <Box sx={{color: 'white', bgcolor: 'black', fontSize: 15, textAlign: 'center'}}>
      <Container maxWidth="lg">
        <Box sx={{padding: 2, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Box sx={{"& a": { color: "white" }}}>
            <a href="mailto:info@travelsy.com.bd"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;info@travelsy.com.bd</a>
          </Box>
          <Box><FontAwesomeIcon icon={faMapMarkedAlt} />&nbsp;&nbsp; 6/9, nazimuddin road, Dhaka 1100, BD</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExtraHeader;