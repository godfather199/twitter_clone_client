import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { set_User_Details } from '../../store/slices/userSlice';


function SearchResult({searchResults}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handle_User_Navigation = (postUser) => {
    dispatch(set_User_Details(postUser))
    navigate(`/profile/${postUser?._id}`)
  }

  return (
    <div className="">
      {searchResults?.map((user) => (
        <div
          key={user?._id}
          className="flex my-4"
          onClick={() => handle_User_Navigation(user)}
        >
          {/* Proile pic */}
          <div className="border border-black rounded-full w-[2rem] h-[2rem]">
            <PersonIcon style={{ width: "2rem", height: "2rem" }} />
          </div>

          {/* Name & Username */}
          <div className="flex flex-col">
            <span className="">{user?.name}</span>
            <span className="">{`@${user?.username}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult