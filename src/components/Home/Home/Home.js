import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import OurLocation from '../../Shared/OurLocation/OurLocation';
import Packeges from '../Packeges/Packeges';
import ExtraFacilities from '../ExtraFacilities/ExtraFacilities';

const Home = ({ packeges, setPackeges }) => {
  return (
    <Box>
      <Banner></Banner>
      <Packeges packeges={packeges} setPackeges={setPackeges}></Packeges>
      <OurLocation></OurLocation>
      <ExtraFacilities></ExtraFacilities>
    </Box>
  );
};

export default Home;