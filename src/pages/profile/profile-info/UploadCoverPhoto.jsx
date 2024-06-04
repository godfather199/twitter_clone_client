import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';



function UploadCoverPhoto() {
  const {current_User} = useSelector(state => state.user)

  return (
    <div className="">
      <div style={{ border: "3px solid red" }} className="relative mb-[5rem]">
        {/* Cover photo */}
        <div className="">
          <div className="w-[23rem] h-[10rem] bg-gray-200" />
        </div>

        {/* Display photo */}
        <div className=" absolute top-[7rem] left-[1rem] bg-white border border-black rounded-full w-[7rem] h-[7rem]">
          <PersonIcon style={{ width: "7rem", height: "7rem" }} />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="">{current_User?.name}</span>
        <span className="">{`@${current_User?.username}`}</span>
      </div>
    </div>
  );
}

export default UploadCoverPhoto