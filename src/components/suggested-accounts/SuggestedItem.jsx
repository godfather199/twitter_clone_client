import {DisplayProfilePicture} from '../'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { set_User_Details } from '../../store/slices/userSlice';
import { thunk_Toggle_Follow } from '../../store/thunks/userThunk';
import { CircularProgress } from '@mui/material';



function SuggestedItem({userInfo, handle_Follow, loading_Id}) {
  const navigate = useNavigate()  
  const dispatch = useDispatch()

  const {is_Loading} = useSelector(state => state.user)
// const is_Loading = true



  const handle_Navigate = () => {
    dispatch(set_User_Details(userInfo))
    navigate(`/profile/${userInfo?._id}`)
  }


  return (
    <div
      // style={{ border: "3px solid red" }}
      className="border-2 border-blue-400 w-[16rem] h-[4.5rem] flex items-center justify-between cursor-pointer mb-4 p-2 rounded-[6px] shadow-xl"
    >
      <div
        // style={{ border: "3px solid green" }}
        className=" w-[10.5rem] flex items-center justify-between"
        onClick={handle_Navigate}
      >
        {/* Display photo */}
        <div className="">
          <DisplayProfilePicture
            imgData={userInfo?.displayPicture?.url}
            imgStyle={'w-[2.5rem] h-[2.5rem]'}
            accountStyle={2.5}
          />
        </div>

        {/* Name/username */}
        <div
          // style={{ border: "3px solid red" }}
          className="flex flex-col w-[7rem]"
        >
          <span className="text-md text-blue-400 text-bold">
            {userInfo?.username}
          </span>
          <span className="text-xs text-blue-400 text-semibold">{`@${userInfo?.username}`}</span>
        </div>
      </div>

      {/* Follow button */}
      <div className="">
        {is_Loading && loading_Id === userInfo?._id ? (
          <CircularProgress style={{ color: "blue" }} size={20} />
        ) : (
          <button
            className=" bg-blue-400 text-white text-sm font-bold w-[5rem] p-2 rounded-[7px] shadow-xl"
            onClick={() => handle_Follow(userInfo?._id)}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default SuggestedItem