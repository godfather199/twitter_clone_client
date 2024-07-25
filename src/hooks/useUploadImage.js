import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useCompareImage from "./useCompare Image";

const useUploadImage = (type) => {
  const { current_User } = useSelector((state) => state.user);
  
  const { imageData: pic1 } = useCompareImage(
    current_User?.displayPicture?.url ? current_User?.displayPicture?.url : ""
  );

  const { imageData: pic2 } = useCompareImage(current_User?.coverPicture?.url);
  
  const [postImage, setPostImage] = useState('');
  const [coverImage, setCoverImage] = useState();
  const [originalProfile, setOriginalProfile] = useState('')
  const [originalCover, setOriginalCover] = useState('')



  // Initial user media
  useEffect(() => {
    setPostImage(type ? pic1 : "")
    setOriginalProfile(type ? pic1 : "")

    setCoverImage(current_User?.coverPicture?.url ? pic2 : "");
    setOriginalCover(current_User?.coverPicture?.url ? pic2 : "");
  }, [pic1, pic2])



  const handle_Upload_Image = (e) => {
    const reader = new FileReader();

    setPostImage("");

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPostImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handle_Upload_Cover_Image = (e) => {
    const reader = new FileReader();

    setCoverImage("");

    reader.onload = () => {
      if (reader.readyState === 2) {
        setCoverImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handle_Remove_Image = () => {
    setPostImage("");
  };

  const handle_Remove_Cover_Image = () => {
    setCoverImage("");
  };

  return {
    postImage,
    coverImage,
    originalProfile,
    originalCover,
    handle_Upload_Cover_Image,
    handle_Upload_Image,
    handle_Remove_Cover_Image,
    handle_Remove_Image,
  };
}



export default useUploadImage