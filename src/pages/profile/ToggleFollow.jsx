import { useEffect, useState } from "react"
import { thunk_Toggle_Follow } from "../../store/thunks/userThunk";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


function ToggleFollow({followingUsersInfo, currentProfileInfo, is_Loading}) {
  const dispatch = useDispatch()
  const [isFollowing, setIsFollowing] = useState(false)
  const [buttonText, setButtonText] = useState('FOLLOWING')


  // Check if logged-in user is "following" this profile
  useEffect(() => {
    setIsFollowing(
      followingUsersInfo?.find((item) => item === currentProfileInfo)
    );
  }, [followingUsersInfo]);


  const handle_Mouse_Enter = () => {
    setButtonText("UNFOLLOW")
  }


  const handle_Mouse_Leave = () => {
    setButtonText("FOLLOWING")
  }


  const handle_Toggle_Follow = () => {
    dispatch(thunk_Toggle_Follow(currentProfileInfo))
  }


  return (
    <div onClick={handle_Toggle_Follow} className="hidden md:block">
      {isFollowing ? (
        <button
          onMouseEnter={handle_Mouse_Enter}
          onMouseLeave={handle_Mouse_Leave}
          disabled={is_Loading}
          className={`${
            is_Loading ? " cursor-not-allowed" : " cursor-pointer"
          } border-2 ${
            buttonText === "UNFOLLOW"
              ? "border-red-400 text-red-400"
              : "border-blue-400 text-blue-400"
          }   font-bold text-lg w-[10rem]  p-3  rounded-[6px] shadow-xl`}
        >
          {is_Loading ? (
            <CircularProgress style={{ color: "blue" }} size={20} />
          ) : (
            buttonText
          )}
        </button>
      ) : (
        <div className="flex items-center justify-around bg-blue-400 text-white w-[10rem]  p-3  rounded-[7px] shadow-xl">
          {!is_Loading && <PersonAddAlt1Icon />}
          <button
            disabled={is_Loading}
            className={`${
              is_Loading ? " cursor-not-allowed" : " cursor-pointer"
            }  font-bold text-lg `}
          >
            {" "}
            {is_Loading ? (
              <CircularProgress style={{ color: "white" }} size={20} />
            ) : (
              "FOLLOW"
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default ToggleFollow