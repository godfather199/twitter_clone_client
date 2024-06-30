import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';





function UploadCoverPhoto({postImage, coverImage, handle_Remove_Cover_Image, handle_Upload_Cover_Image}) {
  const {current_User} = useSelector(state => state.user)

  return (
    <div
      style={{ border: "5px solid purple" }}
      className="w-full h-[21rem] mt-[10rem]"
    >
      <div style={{ border: "3px solid red" }} className="relative mb-[5rem]">
        {/* Cover photo */}
        {coverImage ? (
          //  Display Cover photo
          <div className="relative mb-3">
            <CloseIcon
              onClick={handle_Remove_Cover_Image}
              className="absolute top-2 right-2 bg-white rounded-full p-0.5 cursor-pointer"
            />
            <img
              src={coverImage}
              alt=""
              className="h-[12rem] w-full object-cover"
            />
          </div>
        ) : (
          // Upload cover photo
          <div className="relative">
            <div className="w-[full] h-[12rem] bg-gray-200" />
            <label htmlFor="upload">
              <AddAPhotoIcon
                style={{ fontSize: "2rem", cursor: "pointer" }}
                className=" absolute top-[5rem] left-[16rem]"
              />
            </label>
            <input
              id="upload"
              accept="image/*"
              type="file"
              className="hidden"
              onChange={handle_Upload_Cover_Image}
            />
          </div>
        )}

        {/* Display photo */}
        <div className=" absolute top-[9rem] left-[1rem] bg-white border border-black rounded-full w-[7rem] h-[7rem]">
          {postImage ? (
            <div className="relative mb-3">
              <img
                src={postImage}
                alt=""
                className="h-[7rem] w-[7rem] rounded-full object-cover"
              />
            </div>
          ) : (
            <PersonIcon style={{ width: "7rem", height: "7rem" }} />
          )}
        </div>
      </div>

      <div className="flex flex-col ml-5">
        <span className=" text-lg font-bold text-gray-700">
          {current_User?.name}
        </span>
        <span className="text-sm font-semibold text-gray-500">{`@${current_User?.username}`}</span>
      </div>
    </div>
  );
}

export default UploadCoverPhoto