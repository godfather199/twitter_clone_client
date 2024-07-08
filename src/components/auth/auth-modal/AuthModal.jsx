import {ModalContent} from '../../'
import { useDispatch, useSelector } from 'react-redux';
import { set_Auth_Modal } from '../../../store/slices/userSlice';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  height: 622,
  // bgcolor: 'white',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px'
  // p: 4,
};

export default function AuthModal() {
  const dispatch = useDispatch()

  const {auth_Modal_State, auth_Modal_Type} = useSelector(state => state.user)


  const handle_Modal_Close = () => {
    dispatch(set_Auth_Modal())
  }


  return (
    <div>
      <Modal open={auth_Modal_State} onClose={handle_Modal_Close}>
        <div style={style} className="bg-white p-5 hidden sm:block">
          {/* Modal body */}
          <ModalContent />
        </div>
      </Modal>
    </div>
  );
}
