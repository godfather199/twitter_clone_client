import {Post, LoadingPageSpinner} from '../'
import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  reset_Post_Success } from "../../store/slices/postSlice"
import { thunk_Bookmark_Posts, thunk_Timeline_Post, thunk_Trending_Hashtag_Posts, thunk_User_Posts } from "../../store/thunks/postThunk"
import { useLocation } from 'react-router-dom'



function Posts() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const { is_Loading, posts } = useSelector((state) => state.post);
  const { current_User } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);


  // Update loading spinner state
  useEffect(() => {
    if (is_Loading) {
      setOpen(true);
    } else {
      setOpen(false);
    }

  }, [is_Loading]);



  // Fetch posts
  useEffect(() => {
    if( pathname.split('/')[2] === 'trending-posts') {
      dispatch(thunk_Trending_Hashtag_Posts(pathname.split('/')[3]))
    }
    else if(pathname.split('/')[1] === 'bookmark') {
       dispatch(thunk_Bookmark_Posts())
    }
    else if(pathname.split('/')[1] === 'profile') {
       dispatch(thunk_User_Posts(pathname.split('/')[2]))
    }
    else {
      dispatch(thunk_Timeline_Post())
    }
  }, [current_User])






  // const split_Pathname = useCallback((name, index, type) => {
  //   if(type === 'verify') {
  //     return pathname.split('/')[index] === name
  //   }
  //   else {
  //     return pathname.split('/')[index]
  //   }
  // }, [])


  // // Fetch posts
  // useEffect(() => {
  //   if(split_Pathname('trending-posts', 2, 'verify')) {
  //       console.log('Inside trending: ', split_Pathname('', 2, null))
  //   }
  //   else if(split_Pathname('bookmark', 1, 'verify')) {
  //      dispatch(thunk_Bookmark_Posts())
  //   }
  //   else if(split_Pathname('profile', 1, 'verify')) {
  //      dispatch(thunk_User_Posts(split_Pathname('', 2, null)))
  //   }
  //   else {
  //     dispatch(thunk_Timeline_Post())
  //   }
  // }, [current_User])



  return (
    <div className="">
      {is_Loading ? (
        <LoadingPageSpinner open={open}  />
      ) : (
        <div
          style={{ border: "3px solid red" }}
          className="flex flex-col items-center gap-[3rem]"
        >
          {posts.map((item) => (
            <Post key={item?._id} post={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts