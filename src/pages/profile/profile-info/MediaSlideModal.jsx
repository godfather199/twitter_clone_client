import {TwitterLogo} from '../../../components'
import {UploadCoverPhoto, UploadPhoto} from '../../'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import {slide_Array} from '../../../utils/profile-modal.utils'
import useUploadImage from '../../../hooks/useUploadImage';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import useImage from '../../../hooks/useCompare Image';
import { useEffect, useState } from 'react';
import { thunk_Upload_User_Media } from '../../../store/thunks/userThunk';
import { reset_Media_Success } from '../../../store/slices/userSlice';
import { CircularProgress } from '@mui/material';




function MediaSlideModal({ currentSlide, setCurrentSlide, handleModalClose }) {
  const dispatch = useDispatch()

  const {media_Is_Loading,  media_Is_Success } = useSelector(
    (state) => state.user
  );

  const {
    postImage,
    coverImage,
    originalCover,
    originalProfile,
    handle_Remove_Image,
    handle_Upload_Image,
    handle_Upload_Cover_Image,
    handle_Remove_Cover_Image,
  } = useUploadImage('profile');


  // Close modal
  useEffect(() => {
    if(media_Is_Success) {
      setTimeout(() => {
        dispatch(reset_Media_Success());
        handleModalClose();
      }, 2200);
    }

  }, [media_Is_Success])
  


  const handle_Increment_Slide = () => {
    setCurrentSlide((prev) => prev + 1);
  };


  const handle_Decrement_Slide = () => {
    setCurrentSlide((prev) => prev - 1);
  };


  const handle_Save_Media = () => {
   if (!postImage && !coverImage) {
     return toast.error("No Profile or Cover Image to upload", {
       duration: 1500,
       position: "bottom-center",
     });
   }

   let media_Data = {
    profile_Pic: "",
    cover_Pic: ""
   };


   if (postImage !== '' && postImage !== originalProfile) {
    //  console.log('Inside profile: ', postImage !== originalProfile)
     media_Data["profile_Pic"] = postImage;
   }

   if (coverImage !== '' && coverImage !== originalCover) {
    // console.log('Inside cover: ', coverImage !== originalCover)
     media_Data["cover_Pic"] = coverImage;
   }
   
   const total_Key_Count = Object.keys(media_Data).length
   let key_Count = 0

   Object.keys(media_Data).map((key) => {
    if(media_Data[key] === '') {
      key_Count++
    }

   })

  //  console.log('Key count: ', key_Count)

   if(key_Count === 2) {
    return toast.error("Profile or Cover Image not modified to upload", {
      duration: 1500,
      position: "bottom-center",
    });
   }

  //  console.log("User media: ", media_Data);

  dispatch(thunk_Upload_User_Media(media_Data))

  }

  
  return (
    <div
      // style={{ border: "3px solid orange" }}
      className="h-full flex flex-col "
    >
      {/*Logo*/}
      <div
        // style={{ border: "3px solid red" }}
        className={` ${
          currentSlide === 0
            ? "w-[93%] justify-center"
            : "w-full justify-between"
        }  flex items-center  `}
      >
        <div
          // style={{ border: "3px solid purple" }}
          className={`w-[95%] flex items-center ${
            currentSlide === 0 ? "justify-center" : " justify-between"
          } ml-[1rem]`}
        >
          {currentSlide === 1 && (
            <ArrowBackIcon onClick={handle_Decrement_Slide} />
          )}

          <TwitterLogo />

          {currentSlide === 1 && <CloseIcon onClick={handleModalClose} />}
        </div>
      </div>

      {/* Header */}
      <div
        // style={{ border: "3px solid green" }}
        className=" w-[30rem] h-[5rem] flex flex-col items-center my-[1rem] ml-7"
      >
        <span className=" text-2xl text-gray-600 font-sans font-bold">
          {slide_Array[currentSlide].header.h1}
        </span>
        <span className="text-md text-gray-400 ">
          {slide_Array[currentSlide].header.h2}
        </span>
      </div>

      {/* Media */}
      <div
        // style={{ border: "3px solid green" }}
        className="h-[15rem] flex items-center justify-center"
      >
        {currentSlide === 0 && (
          <UploadPhoto
            postImage={postImage}
            handle_Remove_Image={handle_Remove_Image}
            handle_Upload_Image={handle_Upload_Image}
          />
        )}

        {currentSlide === 1 && (
          <UploadCoverPhoto
            setCurrentSlide={setCurrentSlide}
            postImage={postImage}
            coverImage={coverImage}
            handle_Remove_Cover_Image={handle_Remove_Cover_Image}
            handle_Upload_Cover_Image={handle_Upload_Cover_Image}
          />
        )}
      </div>

      {/* Navigation Button */}
      <div className="flex items-center justify-center ">
        {currentSlide === 0 ? (
          <button
            className={`w-[19rem] p-4 bg-blue-400 text-white rounded-[8px] text-xl font-bold ${
              currentSlide == 0 ? "mt-[1.5rem]" : "mt-[10rem] "
            } mb-4 shadow-lg hover:opacity-90`}
            onClick={handle_Increment_Slide}
          >
            Skip for now
          </button>
        ) : (
          <button
            disabled={media_Is_Loading}
            className={`${
              media_Is_Loading ? " cursor-not-allowed" : " cursor-pointer"
            } w-[18rem] p-4 bg-blue-400 text-white rounded-[8px] text-2xl font-bold ${
              currentSlide == 0 ? "mt-[1.5rem]" : "mt-[10rem] "
            } mb-4 shadow-lg hover:opacity-90`}
            onClick={handle_Save_Media}
          >
            {media_Is_Loading ? (
              <CircularProgress style={{ color: "white" }} size={20} />
            ) : (
              "Save"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default MediaSlideModal
