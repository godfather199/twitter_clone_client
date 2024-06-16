import { useEffect } from "react"
import { thunk_Trending_Hashtag } from "../../store/thunks/hashtagThunk"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


function Trending() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { hashtags } = useSelector((state) => state.hashtag);


    // Fetch trending hashtags
    useEffect(() => {
      dispatch(thunk_Trending_Hashtag());
    }, []);


    return (
      <div className="">
        {/* Heading */}
        <div className="">
          <span className="">TRENDING</span>
        </div>

        {/* Hashtags */}
        <div className=" flex flex-col gap-5">
          {hashtags?.map((item) => (
            <div
              key={item?._id}
              onClick={() =>
                navigate(`/explore/trending-posts/${item?._id}`, {
                  state: { word: item?.hashWord?.split("#")[1] },
                })
              }
              className="border border-gray-300 flex flex-col cursor-pointer"
            >
              <span className="">{item?.hashWord?.split("#")[1]}</span>
              <span className="">{`${item?.postsCount} posts`}</span>
            </div>
          ))}
        </div>
      </div>
    );
}


export default Trending