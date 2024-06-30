import { createSlice } from "@reduxjs/toolkit"
import { thunk_Add_Comment, thunk_Bookmark_Posts, thunk_Create_Post, thunk_Timeline_Post, thunk_Toggle_Like, thunk_Toggle_Repost, thunk_Trending_Hashtag_Posts, thunk_User_Posts } from "../thunks/postThunk"
import toast from "react-hot-toast"
import { duration } from "@mui/material"

const initialState = {
    is_Loading: false,
    is_Loading_Create_Post: false,
    is_Success: false,
    is_Repost_Success: false,
    is_Error: false,
    posts: [],
    post: {}
}


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset_Post_Success: (state) => {
            state.is_Success = false
        },
        reset_Repost_Success: (state) => {
          state.is_Repost_Success = false
        },
        add_Created_Post: (state) => {
          state.posts.unshift(state.post)
        },
        add_Hashtag_Posts: (state, {payload}) => {
          state.posts = payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(thunk_Timeline_Post.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Timeline_Post.fulfilled, (state, {payload}) => {
            const {msg, posts} = payload
            
            state.posts = posts
            state.is_Loading = false
            // state.is_Success = true
          })
          .addCase(thunk_User_Posts.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_User_Posts.fulfilled, (state, {payload}) => {
            const {msg, posts} = payload

            state.posts = posts
            state.is_Loading = false
          })
          .addCase(thunk_Create_Post.pending, (state) => {
            state.is_Loading_Create_Post = true
          })
          .addCase(thunk_Create_Post.fulfilled, (state, {payload}) => {
            const {msg, new_Post} = payload
            
            state.is_Loading_Create_Post = false
            state.post = new_Post
            state.is_Success = true

            toast.success(msg, {
              duration: 1500,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Add_Comment.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Add_Comment.fulfilled, (state, {payload}) => {
            const {msg, post} = payload
            // console.log('Post slice: ', post)

            state.is_Loading = false
            state.posts = state.posts.map((item) => {
              if(item._id === post._id) {
                return {
                  ...item,
                  comments: post.comments
                }
              }

              return item
            })

            toast.success(msg, {
              duration: 1500,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Toggle_Like.fulfilled, (state, {payload}) => {
            const {msg, post} = payload

            state.posts = state.posts.map((item) => {
              if(item._id === post._id) {
                return {
                  ...item,
                  likes: post.likes
                }
              }

              return item
            })

            toast.success(msg, { 
              duration: 1500,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Toggle_Repost.fulfilled, (state, {payload}) => {
            const {msg, post, logged_In_User} = payload

            state.posts = state.posts.map((item) => {
              if(item._id === post._id) {
                return {
                  ...item,
                  repost: post.repost
                }
              }

              return item
            })
            state.is_Repost_Success = true

            toast.success(msg, {
              duration: 1500,
              position: 'bottom-centers'
            })
          })
          .addCase(thunk_Bookmark_Posts.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Bookmark_Posts.fulfilled, (state, {payload}) => {
            const {msg, bookmarks} = payload

            state.is_Loading = false
            state.posts = bookmarks
          })
          .addCase(thunk_Trending_Hashtag_Posts.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Trending_Hashtag_Posts.fulfilled, (state, {payload}) => {
            const {msg, posts} = payload

            state.is_Loading = false
            state.posts = posts
          })
    }
})



export const {
  reset_Post_Success,
  add_Created_Post,
  reset_Repost_Success,
  add_Hashtag_Posts,
} = postSlice.actions;


export default postSlice.reducer