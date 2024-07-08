import { useEffect, useState } from "react"
import { thunk_Trending_Hashtag } from "../../store/thunks/hashtagThunk"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import useItemHover from "../../hooks/useItemHover";


function Trending() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { hashtags } = useSelector((state) => state.hashtag);

    const { currentHoverItemId, handle_Mouse_Enter, handle_Mouse_Leave } =
      useItemHover();

    // const [currentHoverItemId, setCurrentHoverItemId] = useState('')


    // Fetch trending hashtags
    useEffect(() => {
      dispatch(thunk_Trending_Hashtag());
    }, []);


    // const handle_Mouse_Enter = (itemId) => {
    //   setCurrentHoverItemId(itemId)
    // }


    // const handle_Mouse_Leave = () => {
    //   setCurrentHoverItemId('')
    // }


    return (
      <div
        // style={{ border: "4px solid orange" }}
        className="w-[80%]  flex flex-col gap-6"
      >
        {/* Heading */}
        <div className="">
          <span className="text-3xl text-blue-400 font-serif font-semibold">
            TRENDING
          </span>
        </div>

        {/* Hashtags */}
        <div className=" flex flex-col gap-4">
          {hashtags?.map((item) => (
            <div
              key={item?._id}
              onClick={() =>
                navigate(`/explore/trending-posts/${item?._id}`, {
                  state: { word: item?.hashWord?.split("#")[1] },
                })
              }
              className={`flex flex-col cursor-pointer ${
                currentHoverItemId === item?._id ? " bg-blue-200" : "bg-white"
              } p-3 w-[80%] rounded-[5px] shadow-lg`}
              onMouseEnter={() => handle_Mouse_Enter(item?._id)}
              onMouseLeave={handle_Mouse_Leave}
            >
              <span
                className={`text-xl ${
                  currentHoverItemId === item?._id ? " text-white" : "text-blue-400"
                }  font-sans font-semibold`}
              >
                {item?.hashWord?.split("#")[1]}
              </span>
              <span
                className={`text-lg ${
                  currentHoverItemId === item?._id ? " text-white" : "text-gray-500"
                }  font-serif font-semibold`}
              >{`${item?.postsCount} posts`}</span>
            </div>
          ))}
        </div>
      </div>
    );
}


export default Trending