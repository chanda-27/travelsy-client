import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Packeges = ({ packeges, setPackeges }) => {
  useEffect(() => {
    const server = 'https://scary-vampire-55400.herokuapp.com/packages';
    fetch(server)
    .then(res => res.json())
    .then(data => setPackeges(data));
  }, [setPackeges]);
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{color: '#122136'}}>
              <Typography component="h4" variant="h4">Popular Packeges</Typography>
            </Box>
          </Box>
        </Box>
        <Box py={3}>
          <Grid container>
            {
              packeges.map(data => {
                const { _id, packageName, packageDescription, packageImage, packagePrice, tripDuration } = data;
                return (
                  <Grid item xs={12} sm={6} md={4} xl={3} key={_id}>
                    <Box sx={{p: 1, '&:hover > div > button > img': {transition: '2s transform linear', MozTransition: '2s transform linear', WebkitTransition: '2s transform linear', transform: 'scale(1.3)'}}}>
                      <Card sx={{'& > button > div': {bgcolor: 'white', zIndex: 999, pt: 5}}}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={packageImage}
                            alt={packageName}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {packageName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {packageDescription}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                              <Box>Total Day:</Box>
                              <Box>{tripDuration} Days</Box>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions sx={{justifyContent: 'space-between', alignItems: 'center', px: 2}}>
                          <Box sx={{fontSize: '20px'}}>
                            ${packagePrice} / Person
                          </Box>
                          <Link to={`/package/${_id}`}>
                            <Button size="small" color="primary">
                              Book Now
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Box>
                  </Grid>
                );
              })
            }
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Packeges;