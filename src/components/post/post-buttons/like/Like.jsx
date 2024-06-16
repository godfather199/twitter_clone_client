import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_Toggle_Like } from '../../../../store/thunks/postThunk';



function Like({likes, postId}) {
  const dispatch = useDispatch();
  
  const {current_User} = useSelector(state => state.user)
  
  const [isPostLiked, setIsPostLiked] = useState(false)  

    
  // Post "like" status
  useEffect(() => {
    setIsPostLiked(likes?.find((item) => item === current_User?._id));
  }, [likes])



  const handle_Like = () => {
    dispatch(thunk_Toggle_Like(postId))
  }


  return (
    <div className="flex items-center">
      {/* Like icon */}
      <div onClick={handle_Like} className="">
        {isPostLiked ? (
          <FavoriteIcon style={{ color: "blue" }} />
        ) : (
          <FavoriteBorderIcon style={{ color: "blue" }} />
        )}
      </div>

      {/* Like's count */}
      <div className="">
        <span className="">{likes?.length ? likes?.length : null}</span>
      </div>
    </div>
  );
}

export default Like