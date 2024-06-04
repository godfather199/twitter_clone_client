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
      style={{ border: "3px solid red" }}
      className="flex items-center justify-between w-[20rem] cursor-pointer"
    >
      <div className="flex" onClick={handle_Navigate}>
        {/* Display photo */}
        <div className="">
          <AccountCircleIcon style={{ width: "3rem", height: "3rem" }} />
        </div>

        {/* Name/username */}
        <div className="flex flex-col">
          <span className="">{userInfo?.username}</span>
          <span className="">{`@${userInfo?.username}`}</span>
        </div>
      </div>

      {/* Follow button */}
      <div className="">
        {is_Loading && loading_Id === userInfo?._id ? (
          <CircularProgress />
        ) : (
          <button className="" onClick={() => handle_Follow(userInfo?._id)}>
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default SuggestedItem