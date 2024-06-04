import useUploadImage from "../../hooks/useUploadImage";
import CloseIcon from '@mui/icons-material/Close';



function UploadPostImage({postImage, handle_Upload_Image, handle_Remove_Image}) {

    // console.log('Image 2: ', postImage)

  return (
    <div className="">
      {/* Show image  */}
      {postImage && (
        <div className="relative">
          <CloseIcon
            onClick={handle_Remove_Image}
            className="absolute top-2 right-2 bg-white rounded-full p-0.5 cursor-pointer"
          />
          <img src={postImage} alt="" className="h-[15rem] w-[25rem]" />
        </div>
      )}

      <label htmlFor="upload" className=" cursor-pointer">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          // class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
          // style="color: rgb(29, 155, 240);"
          style={{ width: "2rem", height: "2rem" }}
        >
          <g>
            <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
          </g>
        </svg>
      </label>
      <input
        id="upload"
        accept="image/*"
        type="file"
        className="hidden"
        onChange={handle_Upload_Image}
      />
    </div>
  );
}

export default UploadPostImage;


