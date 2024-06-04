import { useEffect } from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function AllComments({comments}) {

  return (
    <div className="">
      {comments?.map((item) => (
        <div key={item?._id} className="flex flex-col">
          <div className="flex">
            {/* Display photo */}
            <div className="">
              <AccountCircleIcon />
            </div>

            {/* User info */}
            <div className="">
              <span className="">{item?.user?.name}</span>
              <span className="">{`@${item?.user?.username}`}</span>
            </div>
          </div>

          {/* Comment text */}
          <div className="">
            <span className="">{item?.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllComments