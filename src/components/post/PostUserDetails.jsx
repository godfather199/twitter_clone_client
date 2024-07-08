import { useNavigate } from 'react-router-dom';
import useTimeAgo from '../../hooks/useTimeAgo'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { set_User_Details } from '../../store/slices/userSlice';



function PostUserDetails({postUser, postOriginTime}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {timeAgo} = useTimeAgo(postOriginTime)


  const handle_Profile_Navigate = () => {
    dispatch(set_User_Details(postUser))
    navigate(`/profile/${postUser?._id}`)
  }


  return (
    <div
      // style={{ border: "3px solid purple" }}
      className="flex items-center gap-2 cursor-pointer"
    >
      {/* Post user Image */}
      <div className="" onClick={handle_Profile_Navigate}>
        <AccountCircleIcon style={{ fontSize: "3rem" }} />
      </div>

      <div className="flex  items-center gap-2">
        {/* Username / Name */}
        <div
          // style={{ border: "3px solid red" }}
          className="flex flex-col md:flex-row items-center gap-2"
          onClick={handle_Profile_Navigate}
        >
          <span className="text-md text-blue-600 font-bold">
            {postUser?.name}
          </span>
          <span className="text-xs text-blue-200 font-semibold">{`@${postUser?.username}`}</span>
        </div>

        {/* Posted intervals of hours */}
        <div className="">
          <span className="text-xs text-gray-500 font-semibold hidden sm:block">{timeAgo}</span>
        </div>
      </div>
    </div>
  );
}

export default PostUserDetails