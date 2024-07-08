import {MediaSlideModal} from '../../'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '35rem',
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
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
    <div className="hidden md:block ">
      <div
        className="  bg-blue-400  text-white font-semibold w-[13rem] p-3 cursor-pointer flex items-center justify-center gap-3 rounded-[8px] shadow-lg hover:opacity-90"
        onClick={handleOpen}
      >
        <SettingsIcon style={{fontSize: '2rem'}} />
        <button className='text-xl'>Set up profile</button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div style={style} className="bg-white rounded-[7px] p-6">
          <MediaSlideModal
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            handleModalClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
}
