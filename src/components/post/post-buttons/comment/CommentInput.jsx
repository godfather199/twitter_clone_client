import {DisplayProfilePicture} from '../../../'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_Add_Comment } from '../../../../store/thunks/postThunk';
import { CircularProgress } from '@mui/material';



function CommentInput({postId}) {
  const dispatch = useDispatch()

  const {is_Loading} = useSelector(state => state.post)
  const {current_User} = useSelector(state => state.user)

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
    <div
      // style={{ border: "3px solid purple" }}
      className="flex items-center justify-between p-2 mt-2"
    >
      {/* Display photo */}
      <DisplayProfilePicture
        imgData={current_User?.displayPicture?.url}
        imgStyle={"w-[3rem] h-[3rem]"}
        accountStyle={3}
        showOutline = {true}
      />

      {/* Input box */}
      <div className=" ">
        <input
          type="text"
          placeholder="Post your reply"
          value={postComment}
          onChange={(e) => setPostComment(e.target.value)}
          className=" outline-none font-semibold text-gray-400 text-sm p-3 rounded-[5px] shadow-lg"
        />
      </div>

      {/* Button */}
      <div className="">
        <button
          onClick={handle_Add_Comment}
          className={` bg-white rounded-[6px] shadow-lg text-blue-400 font-semibold text-lg w-[9rem] p-2 ${
            is_Loading ? " cursor-not-allowed" : " cursor-pointer"
          }`}
          // className={` bg-blue-400 rounded-[6px] shadow-lg text-white font-semibold text-lg w-[9rem] p-2 ${
          //   is_Loading ? " cursor-not-allowed" : " cursor-pointer"
          // }`}
        >
          {is_Loading ? <CircularProgress size={20} /> : "Reply"}
        </button>
      </div>
    </div>
  );
}

export default CommentInput