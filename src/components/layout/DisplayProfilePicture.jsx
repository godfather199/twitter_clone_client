import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classNames from 'classnames';



function DisplayProfilePicture({ imgData, imgStyle, accountStyle = 3, showOutline }) {
  const container_Class = classNames(
    "rounded-full object-cover shadow-lg",
    imgStyle,
    {
      "border-4 border-white": showOutline,
      null: !showOutline,
    }
  );
  
  return (
    <div className="">
      {imgData ? (
        <img
          src={imgData}
          alt=""
          // className={`${imgStyle} rounded-full object-cover shadow-lg ${
          //   showOutline ? "border-4 border-white" : "null"
          // }`}
          className= {container_Class}
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