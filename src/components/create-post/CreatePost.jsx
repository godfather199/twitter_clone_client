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
    <div
      // style={{ border: "3px solid red" }}
      className="border border-gray-400 flex flex-col gap-2 md:gap-5 lg:w-[30rem] p-4 rounded-[6px] shadow-lg"
    >
      {/* Upper section  */}
      <div
        // style={{ border: "3px solid purple" }}
        className="w-[18rem] md:w-[25rem] flex items-center justify-around gap-3"
      >
        <div >
          <AccountCircleIcon style={{fontSize: '3.5rem'}} />
          {/* <AccountCircleIcon className='icon' /> */}
        </div>

        <div className="">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            style={{ height: "4rem" }}
            placeholder="What is happening?"
            className=" border border-black w-[12rem] sm:w-[20rem] resize-none cursor-default outline-none p-3 rounded-[3px]"
          />
        </div>
      </div>

      {/* Lower section */}
      <div
        // style={{ border: "3px solid green" }}
        className="w-[16.3rem] sm:w-[23rem] md:w-[24rem] flex items-end justify-between ml-5"
      >
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
            className={`bg-blue-300 w-[6rem] p-1 sm:p-2 rounded-lg ${
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



