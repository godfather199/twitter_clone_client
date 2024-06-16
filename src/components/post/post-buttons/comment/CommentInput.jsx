import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_Add_Comment } from '../../../../store/thunks/postThunk';
import { CircularProgress } from '@mui/material';



function CommentInput({postId}) {
  const dispatch = useDispatch()

  const {is_Loading} = useSelector(state => state.post)

  const [postComment, setPostComment] = useState('')


  const handle_Add_Comment = () => {
    if(postComment === '') {
      return toast.error('No comment added', {
        duration: 1500,
        position: 'bottom-center'
      })
    }

    dispatch(thunk_Add_Comment({
      comment_Text: postComment,
      postId
    }))    
  }


  return (
    <div className="flex">
      {/* Display photo */}
      <div className="">
        <AccountCircleIcon />
      </div>

      {/* Input box */}
      <div className="">
        <input
          type="text"
          placeholder="Post your reply"
          value={postComment}
          onChange={(e) => setPostComment(e.target.value)}
          className=""
        />
      </div>

      {/* Button */}
      <div className="">
        <button
          onClick={handle_Add_Comment}
          className={` bg-blue-200 w-[10rem] p-2 ${
            is_Loading ? " cursor-not-allowed" : " cursor-pointer"
          }`}
        >
          {is_Loading ? <CircularProgress size={20} /> : "Reply"}
        </button>
      </div>
    </div>
  );
}

export default CommentInput