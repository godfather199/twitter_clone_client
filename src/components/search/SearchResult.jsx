import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { set_User_Details } from '../../store/slices/userSlice';
import { useState } from 'react';
import useItemHover from '../../hooks/useItemHover';


function SearchResult({searchResults, handle_Clear_Text}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const { currentHoverItemId, handle_Mouse_Enter, handle_Mouse_Leave } =
    useItemHover(); 
  
  // const [currentResultId, setCurrentResultId] = useState()


  // const handle_Mouse_Enter = (userId) => {
  //   setCurrentResultId(userId)
  // }


  // const handle_Mouse_Leave = () => {
  //   setCurrentResultId()
  // }


  const handle_User_Navigation = (postUser) => {
    dispatch(set_User_Details(postUser))
    handle_Clear_Text()
    navigate(`/profile/${postUser?._id}`)
  }

  return (
    <div
      className={`absolute top-2 border-2 border-blue-200 z-50 bg-white  ${
        pathname === "/explore" ? "w-[90%] md:w-[80%] xl:w-[25rem]" : "w-[14.4rem] xl:w-[17rem]"
      } flex flex-col items-center justify-center rounded-lg shadow-lg p-1`}
    >
      {searchResults?.map((user) => (
        <div
          // style={{ border: "3px solid green" }}
          key={user?._id}
          className={`${
            user?._id === currentHoverItemId ? "bg-blue-100" : null
          } flex items-center justify-around  my-3 cursor-pointer w-[90%] border-2 border-blue-300 p-1 rounded-lg`}
          onClick={() => handle_User_Navigation(user)}
          onMouseEnter={() => handle_Mouse_Enter(user?._id)}
          onMouseLeave={handle_Mouse_Leave}
        >
          {/* Proile pic */}
          <div className="border border-black rounded-full w-[2rem] h-[2rem] hidden xl:block">
            <PersonIcon
              style={{ width: "2rem", height: "2rem", color: "blue" }}
            />
          </div>

          {/* Name & Username */}
          <div
            // style={{ border: "3px solid purple" }}
            className="flex flex-col w-[10rem]"
          >
            <span className="text-lg text-blue-600 font-bold">
              {user?.name}
            </span>
            <span className="text-sm text-blue-400 font-semibold">{`@${user?.username}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult