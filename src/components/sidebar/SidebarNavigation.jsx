import {PostModal} from '../'
import { Link, useNavigate } from "react-router-dom"
import { navigation_Items } from "../../utils/navigation.utils"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { set_User_Details } from '../../store/slices/userSlice';




function SidebarNavigation() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {current_User} = useSelector(state => state.user)

  const [currentItem ,setCurrentItem] = useState('')


  const handle_Mouse_Enter = (item) => {
    setCurrentItem(item)
  }


  const handle_Mouse_Leave = () => {
    setCurrentItem('')
  }

  const handle_Navigate = (info) => {
    if (info.title === "Profile") {
      dispatch(set_User_Details(current_User));
      navigate(`${info.link}/${current_User?._id}`);
      return;
    }

    navigate(info.link)
  }



  return (
    <div className=" h-[26rem] p-2 rounded-[5px]  ">
      {/* Navigation links */}
      <div
        // style={{ border: "3px solid purple" }}
        className="h-[17rem] sm:h-[22rem] flex flex-col justify-between "
      >
        {navigation_Items.map((item, idx) => (
          <div
            // to={
            //   item.title === "Profile"
            //     ? `${item.link}/${current_User?._id}`
            //     : item.link
            // }
            key={idx}
            // style={{ border: "3px solid green" }}
            className={`${
              currentItem === item.title ? " bg-blue-200" : null
            } flex items-center justify-between w-[2.5rem] sm:w-[3.5rem] md:w-[97%] p-3 rounded-lg ${
              currentItem !== item.title ? "shadow-blue-200 shadow-lg" : null
            } cursor-pointer `}
            onMouseEnter={() => handle_Mouse_Enter(item.title)}
            onMouseLeave={handle_Mouse_Leave}
            onClick={() => handle_Navigate(item)}
          >
            <div
              // style={{ border: "3px solid red" }}
              className="w-[2rem] h-[1rem] sm:h-[2rem] flex items-center justify-between"
              // className="min-w-[1rem] min-h-[1rem] sm:min-w-[2rem] sm:min-h-[2rem] flex items-center justify-between"
            >
              {item.symbol}
            </div>

            <div
              // style={{ border: "3px solid orange" }}
              className="hidden md:block w-[6rem] ml-3"
            >
              <span className="text-xs lg:text-lg text-blue-500 font-bold">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Create post modal */}
      {/* <div className="mt-5">
        <PostModal />
      </div> */}
    </div>
  );
}

export default SidebarNavigation