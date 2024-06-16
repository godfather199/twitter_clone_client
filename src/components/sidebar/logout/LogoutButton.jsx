import {LogoutMenu} from '../../'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunk_Logout } from '../../../store/thunks/userThunk';



function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {current_User} = useSelector(state => state.user)

  const [openLogoutMenu, setLogoutMenu] = useState(false);

  
  const handle_Open_Menu = (event) => {
    setLogoutMenu(event.currentTarget);
  };

  
  const handle_Close_Menu = () => {
    setLogoutMenu(null);
    dispatch(thunk_Logout())

    setTimeout(() => {
      navigate('/')
    }, 3000);
  };


  return (
    <div
      style={{ border: "3px solid red" }}
      className="flex items-center justify-between"
    >
      {/* Profile Pic */}
      <div className="">
        <AccountCircleIcon />
      </div>

      {/* User metadata */}
      <div className="flex flex-col">
        <span className="">{current_User?.name}</span>
        <span className="">{`@${current_User?.username}`}</span>
      </div>

      {/* Logout menu */}
      <div className="">
        <MoreHorizIcon
          onClick={handle_Open_Menu}
          style={{ cursor: "pointer" }}
        />
        <LogoutMenu
          openLogoutMenu={openLogoutMenu}
          handle_Close_Menu={handle_Close_Menu}
          username = {current_User?.username}
        />
      </div>
    </div>
  );
}

export default LogoutButton