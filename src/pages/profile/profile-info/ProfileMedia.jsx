import PersonIcon from '@mui/icons-material/Person';


function ProfileMedia() {
  return (
    <div style={{ border: "3px solid red" }} className="relative mb-[5rem]">
      {/* Cover photo */}
      <div className="">
        <div className="w-[35rem] h-[10rem] bg-gray-200" />
      </div>

      {/* Display photo */}
      <div className=" absolute top-[7rem] left-[1rem] bg-white border border-black rounded-full w-[7rem] h-[7rem]">
        <PersonIcon style={{ width: "7rem", height: "7rem" }} />
      </div>
    </div>
  );
}

export default ProfileMedia