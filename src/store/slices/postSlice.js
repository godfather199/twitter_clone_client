import { createSlice } from "@reduxjs/toolkit"
import { thunk_Create_Post, thunk_Timeline_Post, thunk_User_Posts } from "../thunks/postThunk"
import toast from "react-hot-toast"

const initialState = {
    is_Loading: false,
    is_Success: false,
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
        add_Created_Post: (state) => {
          state.posts.unshift(state.post)
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
            state.is_Loading = true
          })
          .addCase(thunk_Create_Post.fulfilled, (state, {payload}) => {
            const {msg, new_Post} = payload
            
            state.is_Loading = false
            state.post = new_Post
            state.is_Success = true

            toast.success(msg, {
              duration: 1500,
              position: 'bottom-center'
            })
          })
    }
})



export const {reset_Post_Success, add_Created_Post} = postSlice.actions


export default postSlice.reducer