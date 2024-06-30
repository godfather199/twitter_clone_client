import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function DisplayProfilePicture({ imgData, imgStyle, accountStyle = 3, showOutline }) {
  return (
    <div className="">
      {imgData ? (
        <img
          src={imgData}
          alt=""
          className={`${imgStyle} rounded-full object-cover shadow-lg ${
            showOutline ? "border-4 border-white" : "null"
          }`}
        />
      ) : (
        <AccountCircleIcon
          style={{ width: `${accountStyle}rem`, height: `${accountStyle}rem` }}
        />
      )}
    </div>
  );
}

export default DisplayProfilePicture