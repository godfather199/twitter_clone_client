import {DisplayProfilePicture} from '../../../'
import { useEffect } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function AllComments({comments}) {
  
  return (
    <div  className="p-2">
      {comments?.map((item) => (
        <div
          key={item?._id}
          className="border-2 border-blue-400 flex flex-col my-6 p-4 rounded-[6px] shadow-xl bg-white"
        >
          <div
            // style={{ border: "3px solid purple" }}
            className="w-[17rem] flex items-center justify-between"
          >
            {/* Display photo */}
            <DisplayProfilePicture
              imgData={item?.user?.displayPicture?.url}
              imgStyle={"w-[2rem] h-[2rem]"}
              accountStyle={2}
            />

            {/* User info */}
            <div
              // style={{ border: "3px solid green" }}
              className="w-[14rem] flex items-center justify-around"
            >
              <span className="text-lg font-semibold text-blue-400">{item?.user?.name}</span>
              <span className="text-xs font-semibold text-blue-400">{`@${item?.user?.username}`}</span>
            </div>
          </div>

          {/* Comment text */}
          <div className="mt-2 ml-[3.7rem]">
            <span className="text-xl font-serif text-gray-500">{item?.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllComments