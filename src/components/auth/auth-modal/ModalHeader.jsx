import { useDispatch, useSelector } from "react-redux";
import {TwitterLogo} from '../../'
import CloseIcon from '@mui/icons-material/Close';
import { set_Auth_Modal } from "../../../store/slices/userSlice";



function ModalHeader() {
  const dispatch = useDispatch()

  const {auth_Modal_Type} = useSelector(state => state.user)
  
  return (
    <div
      // style={{ border: "3px solid green" }}
      className="flex justify-between ml-[10rem] "
    >
      <div
        // style={{ border: "3px solid purple" }}
        className="flex flex-col items-center gap-3"
      >
        <TwitterLogo />

        {/* Header text */}
        <div className="">
          <span className=" text-xl font-serif font-bold text-blue-400">
            {auth_Modal_Type === "Login Modal"
              ? "Sign in to twitter"
              : "Sign up to twitter"}
          </span>
        </div>
      </div>

      <div className="">
        <CloseIcon
          onClick={() => dispatch(set_Auth_Modal())}
          style={{ cursor: "pointer", fontSize: '2rem', }}
        />
      </div>
    </div>
  );
}

export default ModalHeader