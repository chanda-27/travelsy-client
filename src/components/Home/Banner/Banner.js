import { Button, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import homeMainBannerPicture1 from '../../../images/homeMainBannerPicture1.jpg';
import homeMainBannerPicture2 from '../../../images/homeMainBannerPicture2.jpg';
import homeMainBannerPicture3 from '../../../images/homeMainBannerPicture3.jpg';
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  const matches900px = useMediaQuery('(min-width:900px)');
  return (
    <Box sx={{color: 'white', bgcolor: '#9d4edd', py: 8}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable": true,
        }}
        autoplay={{
          "delay": 4000,
          "disableOnInteraction": false
        }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Container maxWidth="lg">
            <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={6}>
                <Box sx={{p: 2, '& img': {borderRadius: '20px',}}}>
                  <img src={homeMainBannerPicture1} alt="Main Banner" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{px: 2, py: 5, textAlign: `${matches900px ? 'right' : 'center'}`}}>
                  <Box sx={{textTransform: 'uppercase'}}>Magical London Bridge with Neil Stay</Box>
                  <Typography component="h1" fontSize="47px" fontWeight="700">Embrace the great outdoors</Typography>
                  <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>Spend some quality time with Mother Nature for a (literal) breath of fresh air.</Typography>
                  <Box py={3}>
                    <Link to='/dashboard/myOrders'>
                      <Button variant="contained" color="secondary" size="large">Your Bookings</Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        {/* Slider Number 01 */}
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Container maxWidth="lg">
            <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={6}>
                <Box sx={{p: 2, '& img': {borderRadius: '20px',}}}>
                  <img src={homeMainBannerPicture2} alt="Main Banner" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{px: 2, py: 5, textAlign: `${matches900px ? 'right' : 'center'}`}}>
                  <Box sx={{textTransform: 'uppercase'}}>Port Blair, Havelock in  5 Nights with Flights</Box>
                  <Typography component="h1" fontSize="47px" fontWeight="700">The couple that travels together stays together</Typography>
                  <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>Spend some quality time with Mother Nature for a (literal) breath of fresh air.</Typography>
                  <Box py={3}>
                    <Link to='/dashboard/myOrders'>
                      <Button variant="contained" color="secondary" size="large">Your Bookings</Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        {/* Slider Number 01 */}
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Container maxWidth="lg">
            <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={6}>
                <Box sx={{p: 2, '& img': {borderRadius: '20px',}}}>
                  <img src={homeMainBannerPicture3} alt="Main Banner" />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{px: 2, py: 5, textAlign: `${matches900px ? 'right' : 'center'}`}}>
                  <Box sx={{textTransform: 'uppercase'}}>A Trip to Villa De Cosa</Box>
                  <Typography component="h1" fontSize="47px" fontWeight="700">Find your next adventure with the kids</Typography>
                  <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>Spend some quality time with Mother Nature for a (literal) breath of fresh air.</Typography>
                  <Box py={3}>
                    <Link to='/dashboard/myOrders'>
                      <Button variant="contained" color="secondary" size="large">Your Bookings</Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        {/* Slider Number 01 */}
      </Swiper>
    </Box>
  );
};

export default Banner;