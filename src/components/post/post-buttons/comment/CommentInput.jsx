import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import toast from 'react-hot-toast';



function CommentInput() {
  const [postComment, setPostComment] = useState('')


  const handle_Add_Comment = () => {
    if(postComment === '') {
      return toast.error('No comment added', {
        duration: 1500,
        position: 'bottom-center'
      })
    }

    console.log('Comment: ', postComment)
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
        <button onClick={handle_Add_Comment} className="">
          Reply
        </button>
      </div>
    </div>
  );
}

export default CommentInput