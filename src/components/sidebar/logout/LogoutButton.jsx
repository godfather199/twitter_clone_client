import {LogoutMenu} from '../../'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunk_Logout } from '../../../store/thunks/userThunk';



function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {current_User} = useSelector(state => state.user)

  const [openLogoutMenu, setLogoutMenu] = useState(false);
  const [isHidden, setIsHidden] = useState(false)


  // Hide elements on window resize
  useEffect(() => {
    handle_Resize()

    window.addEventListener('resize', handle_Resize)

    return () => {
      window.addEventListener('resize', handle_Resize)
    }
  }, [])



  const handle_Resize = () => {
    setIsHidden(window.innerWidth > 1024)
  }
  

  
  const handle_Open_Menu = (event) => {
    setLogoutMenu(event.currentTarget);
  };

  
  const handle_Close_Menu = () => {
    setLogoutMenu(null);
  };
  
  
  const handle_Logout = () => {
    dispatch(thunk_Logout())
  
    setTimeout(() => {
      navigate('/')
    }, 2100);

    handle_Close_Menu()
  }


  return (
    <div
      // style={{ border: "3px solid red" }}
      className="border-none lg:border-2 lg:border-blue-400  flex items-center justify-between gap-3 shadow-none lg:shadow-gray-400 lg:shadow-lg rounded-[6px] p-3"
    >
      {/* Profile Pic */}
      <div
        // style={{border: '3px solid red'}}
        className="flex items-center justify-center cursor-pointer"
        // className="flex items-center justify-center cursor-pointer min-w-[3rem] min-h-[3rem]"
        onClick={!isHidden ? handle_Open_Menu : null}
      >
        {current_User?.displayPicture?.url ? (
          <img
            src={current_User?.displayPicture?.url}
            alt=""
            className=" min-w-[3rem] min-h-[3rem] sm:w-[3rem] sm:h-[3rem] object-cover rounded-full"
            // className=" w-[2.5rem] h-[2.5rem] object-cover rounded-full"
          />
        ) : (
          <AccountCircleIcon style={{ width: "3rem", height: "3rem" }} />
        )}
      </div>

      {isHidden && (
        <>
          {/* User metadata */}
          <div
            style={{ border: "3px solid green" }}
            className="  flex flex-col min-w-[6rem]"
          >
            <span className=" text-xs  text-blue-400 font-bold">
              {current_User?.name}
            </span>
            <span className="text-xs  text-blue-300 font-semibold">{`@${current_User?.username}`}</span>
          </div>
        </>
      )}

      {/* Logout menu */}
      <div className="">
        {isHidden && (
          <MoreHorizIcon
            onClick={handle_Open_Menu}
            style={{ cursor: "pointer" }}
          />
        )}

        <LogoutMenu
          openLogoutMenu={openLogoutMenu}
          handle_Close_Menu={handle_Close_Menu}
          username={current_User?.username}
          handle_Logout={handle_Logout}
        />
      </div>
    </div>
  );
}

export default LogoutButton