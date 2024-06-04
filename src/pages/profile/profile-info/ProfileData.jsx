import useFormattedDate from "../../../hooks/useFormattedDate"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



function ProfileData({profile}) {
  const {name, username, createdAt, followers, following} = profile

  const {formattedDate} = useFormattedDate(createdAt)

  
  return (
    <div className="">
      <div className="">
        <span className="">{name}</span>
      </div>

      <div className="">
        <span className="">{`@${username}`}</span>
      </div>

      <div className="">
        <CalendarMonthIcon />
        <span className="">{`Joinded ${formattedDate}`}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="">{`${following.length} Following`}</span>
        <span className="">{`${followers.length} Followers`}</span>
      </div>
    </div>
  )
}

export default ProfileData