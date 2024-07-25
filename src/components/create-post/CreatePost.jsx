import {UploadPostImage, DisplayProfilePicture } from '../'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import useUploadImage from '../../hooks/useUploadImage';
import toast from 'react-hot-toast';
import { thunk_Create_Post } from '../../store/thunks/postThunk';
import { useDispatch, useSelector } from 'react-redux';
import { add_Created_Post, reset_Post_Success } from '../../store/slices/postSlice';
import { Link, useNavigate } from 'react-router-dom';



function CreatePost() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { postImage, handle_Upload_Image, handle_Remove_Image } =
  useUploadImage();

  const {is_Loading_Create_Post, is_Success } = useSelector(state => state.post)
  const {current_User} = useSelector(state => state.user)
  // console.log('Current user: ', current_User)

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
      className="border border-gray-400 flex flex-col gap-2 md:gap-5 w-[105%] md:w-[23rem] lg:w-[30rem] p-4 rounded-[6px] shadow-lg ml-0 md:ml-[2rem] lg:ml-[3rem]"
    >
      {/* Upper section  */}
      <div
        // style={{ border: "3px solid purple" }}
        className="w-[18rem] md:w-[22rem] flex items-center  gap-3 md:gap-[2rem]  "
      >
        {/* <Link to={`/profile/${current_User?._id}`}> */}
        <div
          onClick={() =>
            navigate(`/profile/${current_User?._id}`, { state: "create-post" })
          }
          className=" cursor-pointer min-w-[3.5rem] min-h-[3.5rem]"
        >
          <DisplayProfilePicture
            imgData={current_User?.displayPicture?.url}
            imgStyle={"w-[3.5rem] h-[3.5rem]"}
            accountStyle={3.5}
          />
        </div>
        {/* </Link> */}

        <div className="">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            style={{ height: "4rem" }}
            placeholder="What is happening?"
            className=" border border-black w-[100%] sm:w-[18rem] md:w-[15rem] lg:w-[20rem] resize-none cursor-default outline-none p-3 rounded-[3px]"
          />
        </div>
      </div>

      {/* Lower section */}
      <div
        // style={{ border: "3px solid green" }}
        className="w-[17.5rem] sm:w-[22rem] md:w-[20rem] lg:w-[25rem] flex items-end justify-between ml-2"
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
            disabled={is_Loading_Create_Post}
            className={`bg-blue-400 text-white font-bold w-[6rem] p-1 sm:p-2 rounded-[7px] shadow-lg ${
              is_Loading_Create_Post ? " cursor-not-allowed" : " cursor-pointer"
            }`}
          >
            {is_Loading_Create_Post ? <CircularProgress /> : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost
