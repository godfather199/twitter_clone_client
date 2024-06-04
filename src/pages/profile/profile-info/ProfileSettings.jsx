import {MediaSlideModal} from '../../'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '25rem',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto'
};



export default function ProfileSettings() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0)


  const handleOpen = () => setOpen(true);


  const handleClose = () => {
    setCurrentSlide(0)
    setOpen(false);
  }


  return (
    <div>
      <Button onClick={handleOpen}>Set up profile</Button>
      <Modal open={open} onClose={handleClose} >
        <div style={style} className="bg-white">
          <MediaSlideModal
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            handleModalClose = {handleClose}
          />
        </div>
      </Modal>
    </div>
  );
}
