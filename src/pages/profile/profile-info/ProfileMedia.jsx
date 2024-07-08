import PersonIcon from '@mui/icons-material/Person';


function ProfileMedia({profile, cover}) {
  return (
    <div style={{ border: "3px solid red" }} className="relative mb-[3rem] w-[100%] lg:w-[95%]">
      {/* Cover photo */}
      <div className="">
        {cover ? (
          <img
            src={cover}
            alt=""
            className="w-full h-[8rem] lg:h-[11rem] object-cover"
          />
        ) : (
          <div className="w-full h-[11rem] bg-gray-200" />
        )}
      </div>

      {/* Display photo */}
      {profile ? (
        <img
          src={profile}
          alt=""
          className="absolute top-[5rem] lg:top-[7rem] left-[1rem] rounded-full w-[6rem] h-[6rem] lg:w-[7rem] lg:h-[7rem] object-cover"
        />
      ) : (
        <div className=" absolute top-[7rem] left-[1rem] bg-white border border-black rounded-full w-[7rem] h-[7rem]">
          <PersonIcon style={{ width: "7rem", height: "7rem" }} />
        </div>
      )}
    </div>
  );
}

export default ProfileMedia