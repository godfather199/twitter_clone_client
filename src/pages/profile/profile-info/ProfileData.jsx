import useFormattedDate from "../../../hooks/useFormattedDate"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



function ProfileData({profile}) {
  const {name, username, createdAt, followers, following} = profile

  const {formattedDate} = useFormattedDate(createdAt)

  
  return (
    <div  className=" flex flex-col gap-3 lg:gap-5">
      <div className="flex flex-col ">
        <span className="text-3xl font-serif font-semibold text-blue-400">
          {name}
        </span>
        <span className="text-md font-light text-gray-600">{`@${username}`}</span>
      </div>

      <div className="">
        <CalendarMonthIcon style={{ color: "gray" }} />
        <span className="text-md font-light text-gray-600">{`Joinded ${formattedDate}`}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-blue-400">
          {`${following.length}`}{" "}
          <span className="text-gray-600">Following</span>
        </span>
        <span className=" text-blue-400">
          {`${followers.length}`}{" "}
          <span className="text-gray-600">Followers</span>
        </span>
      </div>
    </div>
  );
}

export default ProfileData






