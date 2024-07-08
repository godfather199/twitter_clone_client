import PersonIcon from "@mui/icons-material/Person";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';



function UploadPhoto({ postImage, handle_Remove_Image, handle_Upload_Image }) {

  return (
    <div
      // style={{ border: "3px solid orange" }}
      className=" bg-white  rounded-full w-[11rem] h-[11rem] flex items-center justify-center relative"
    >
      {postImage ? (
        // Display image
        <div className="relative mb-3 shadow-lg">
          <CloseIcon
            onClick={handle_Remove_Image}
            className="absolute top-2 right-2 bg-white rounded-full p-0.5 cursor-pointer"
          />
          <img
            // style={{border: "3px solid red"}}
            src={postImage}
            alt=""
            className="h-[13rem] w-[28rem] object-cover"
          />
        </div>
      ) : (
        // Upload image
        <>
          <label htmlFor="upload">
            <PersonIcon
              style={{
                width: "11rem",
                height: "11rem",
                color: "gray",
                cursor: "pointer",
              }}
            />
            <AddAPhotoIcon
              className="absolute top-[2.5rem] left-[4.5rem] "
              style={{ color: "white" }}
            />
          </label>
          <input
            id="upload"
            accept="image/*"
            type="file"
            className="hidden"
            onChange={handle_Upload_Image}
          />
        </>
      )}
    </div>
  );
}

export default UploadPhoto;
