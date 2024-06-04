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
    <div className="flex items-center gap-3 cursor-pointer">
      {/* Post Image */}
      <div className="" onClick={handle_Profile_Navigate}>
        <AccountCircleIcon className="w-[3rem] h-[3rem] rounded-full" />
      </div>

      {/* Username / Name */}
      <div
        className="flex items-center gap-5"
        onClick={handle_Profile_Navigate}
      >
        <span className="">{postUser?.name}</span>
        <span className="">{`@${postUser?.username}`}</span>
      </div>

      {/* Posted intervals of hours */}
      <div className="">
        <span className="">{timeAgo}</span>
      </div>
    </div>
  );
}

export default PostUserDetails