import { Button, Modal, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const OrderCard = ({ order, setServerResponse }) => {
  const [open, setOpen] = useState(false);
  const { _id, date, packageName, packagePrice, status, tripDuration } = order;

  // useHistory
  const history = useHistory();

  const [month, day, year] = [new Date(date).getMonth() + 1, new Date(date).getDate(), new Date(date).getFullYear()];
  console.log(month, day, year);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #ffda39',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };

  const handleCancel = (id) => {
    console.log(id);
    fetch(`https://scary-vampire-55400.herokuapp.com/deleteOrder/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        alert("Deleted successfully!");
        history.push("/dashboard/myOrders");
        setServerResponse({deleted: result});
      })
  }
  return (
    <Box sx={{p: 3, mb: 3, bgcolor: '#003a6c', color: 'white', fontSize: '18px', borderRadius: '0 20px'}} key={_id}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Package Name:</Box>
        <Box sx={{p: 1}}>{packageName}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Package Price:</Box>
        <Box sx={{p: 1, color: '#ffda39'}}>${packagePrice}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Trip Start Date:</Box>
        <Box sx={{p: 1}}>{`${day}/${month}/${year}`}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Trip Duration:</Box>
        <Box sx={{p: 1}}>{tripDuration} days</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{p: 0, fontWeight: 700}}>Status:</Box>
        <Box sx={{p: 1}}>{status}</Box>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{p: 1}}>
          <Button variant="contained" onClick={handleOpen}>Cancle This Trip</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure!
              </Typography>
              <Typography id="modal-modal-description" sx={{ my: 2 }}>
                You're going to cancle this trip!
              </Typography>
              <Box textAlign="center">
                <Button onClick={handleClose}>No</Button>
                <Button color="warning" onClick={() => { handleCancel(_id); handleClose(); }}>Yes</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderCard;