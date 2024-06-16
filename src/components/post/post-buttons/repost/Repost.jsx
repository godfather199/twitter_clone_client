import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_Fetch_User_By_Id } from '../../../../store/thunks/userThunk';
import { reset_Repost_Success } from '../../../../store/slices/postSlice';
import { thunk_Toggle_Repost } from '../../../../store/thunks/postThunk';


function Repost({repost, postedBy, postId}) {
  const dispatch = useDispatch()

  const {current_User} = useSelector(state => state.user)
  const {is_Repost_Success} = useSelector(state => state.post)

  const [isReposted, setIsReposted] = useState(false)


  // Check if logged-in user has reposted the post
  useEffect(() => {
    setIsReposted(repost?.find((item) => item === current_User?._id));
  }, [repost]);


  // Update logged-in-user
  useEffect(() => {
    if(is_Repost_Success) {
      dispatch(thunk_Fetch_User_By_Id(current_User?._id))
    }

    return () => dispatch(reset_Repost_Success()) 

  }, [is_Repost_Success])



  const handle_Repost = () => {
    if(postedBy?._id === current_User?._id) {
      return toast.error('You cannot Repost your own post', {
        duration: 1500,
        position: 'bottom-center'
      })
    }

    dispatch(thunk_Toggle_Repost(postId))

  }  



  return (
    <div className="flex items-center gap-1">
      {/* Repost button */}
      <div className=" cursor-pointer" onClick={handle_Repost}>
        {isReposted ? (
          <RepeatOnIcon style={{ color: "blue" }} />
        ) : (
          <RepeatIcon style={{ color: "blue" }} />
        )}
      </div>

      {/* Total reposts */}
      <div className="">
        <span className="">{repost?.length > 0 ? repost?.length : null}</span>
      </div>
    </div>
  );
}

export default Repost