import {UploadPostImage } from '../'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import useUploadImage from '../../hooks/useUploadImage';
import toast from 'react-hot-toast';
import { thunk_Create_Post } from '../../store/thunks/postThunk';
import { useDispatch, useSelector } from 'react-redux';
import { add_Created_Post, reset_Post_Success } from '../../store/slices/postSlice';



function CreatePost() {
  const dispatch = useDispatch()

  const { postImage, handle_Upload_Image, handle_Remove_Image } =
  useUploadImage();

  const {is_Loading, is_Success } = useSelector(state => state.post)

  const [postText, setPostText] = useState('')


  // Append the created 'post' to the timeline posts
  useEffect(() => {
    if(is_Success) {
      setTimeout(() => {
        dispatch(add_Created_Post())
      }, 1800);
    }

    return () => dispatch(reset_Post_Success())
  }, [is_Success])


  const handle_Create_Post = () => {
    if(postImage === '' && postText === '') {
      return toast.error('Provide an image or text', {
        duration: 1800,
        position: 'bottom-center'
      })
    }

    dispatch(thunk_Create_Post({
      postString: postText,
      postPic: postImage
    }))
    
    setPostText('')
    handle_Remove_Image()
  }


  return (
    <div className="">
      {/* Upper section  */}
      <div className="flex">
        <div className="">
          <AccountCircleIcon />
        </div>

        <div className="">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            style={{ height: "4rem" }}
            placeholder="What is happening?"
            className=" border border-black w-[20rem] resize-none cursor-default outline-none p-3"
          />
        </div>
      </div>

      {/* Lower section */}
      <div className="flex items-center justify-between">
        {/* Upload photo */}
        <div className="">
          <UploadPostImage
            postImage={postImage}
            handle_Upload_Image={handle_Upload_Image}
            handle_Remove_Image={handle_Remove_Image}
          />
        </div>

        {/* Post */}
        <div className="">
          <button
            onClick={handle_Create_Post}
            disabled={is_Loading}
            className={`bg-blue-300 w-[8rem] p-3 rounded-lg ${
              is_Loading ? " cursor-not-allowed" : " cursor-pointer"
            }`}
          >
            {is_Loading ? <CircularProgress /> : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost



