import {Post} from '../'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { reset_Post_Success } from "../../store/slices/postSlice"
import { thunk_Timeline_Post, thunk_User_Posts } from "../../store/thunks/postThunk"
import { useLocation } from 'react-router-dom'



function Posts() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const {is_Success, posts} = useSelector(state => state.post)
  const {current_User} = useSelector(state => state.user)

  const [isProfilePage, setIsProfilePage] = useState(false)
  // console.log('Status: ', pathname.split('/')[1] === 'profile')
  // console.log('Posts: ', posts)

  // Check for profile route
  // useEffect(() => {
  //   setIsProfilePage(pathname.split('/')[1] === 'profile')
  // }, [pathname])


  // Fetch posts
  useEffect(() => {
    if(pathname.split('/')[1] === 'profile') {
       dispatch(thunk_User_Posts(pathname.split('/')[2]))
    }
    else {
      dispatch(thunk_Timeline_Post())
    }
  }, [current_User])


  // Reset post state
  // useEffect(() => {
  //   if(is_Success) {
  //     dispatch(reset_Post_Success())
  //   }


  // }, [is_Success])


  return (
    <div className="flex flex-col gap-5">
      {posts.map((item) => (
        <Post key = {item._id} post = {item} />
      ))}
    </div>
  )
}

export default Posts