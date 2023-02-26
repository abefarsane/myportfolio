import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import BookingPage from './media/mmt/BookingPage.png'
import BookingReq from './media/mmt/BookingReq.png'
import Chat from './media/mmt/Chat.png'
import OurPack from './media/mmt/OurPack.png'
import PackPage from './media/mmt/PackPage.png'
import Settings from './media/mmt/Settings.png'
import SettingsS from './media/mmt/SettingsS.png'
import HomePage from './media/mmt/HomePage.png'

import CoffeeTable from './media/area4u/CoffeeTable.png'
import CTDashboard from './media/area4u/CTDashboard.png'
import CTProfile from './media/area4u/CTProfile.png'
import CTProfile2 from './media/area4u/CTProfile2.png'
import CTSearch from './media/area4u/CTSearch.png'



export const ModalCustom = ({ children, id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    heigth: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2.5
  };

  

  

  return (
    <div id='mod'>
      <section className='imgs'>

        {
          id == 1 ? (
            <img src={require('./media/mmt/HomePage.png')} onClick={handleOpen} />
          ) : (
            <img src={require('./media/area4u/CoffeeTable.png')} onClick={handleOpen} />
          )
        }

        
      </section>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-desscription"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 250,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {children}
            {
              id == 1 ? (
                <section className='imgs-module'>
                  <img src={HomePage} />
                  <img src={BookingPage} />
                  <img src={Chat} />
                  <img src={Settings} />
                  <img src={OurPack} />
                </section>
              ) : (
                <section className='imgs-module'>
                  <img src={CoffeeTable} />
                  <img src={CTDashboard} />
                  <img src={CTProfile} />
                  <img src={CTProfile2} />
                  <img src={CTSearch} />
                </section>
              )
              
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalCustom