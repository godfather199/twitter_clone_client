import { createAsyncThunk } from "@reduxjs/toolkit";
import { add_Comment_Service, create_Post_Service, timeline_Posts_Service, user_Posts_Service } from "../../services/postService";



export const thunk_Timeline_Post = createAsyncThunk(
    'post/timeline', async (thunkAPI) => {
        try {
            return await timeline_Posts_Service()
        } catch (error) {
            return thunkAPI.rejectWithValue(err.response.data.message)
        }
    }
)



export const thunk_User_Posts = createAsyncThunk(
    'post/user-posts', async (userId, thunkAPI) => {
        try {
            return await user_Posts_Service(userId)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
)



export const thunk_Create_Post = createAsyncThunk(
    'post/create-post', async (post_Data, thunkAPI) => {
        try {
            return await create_Post_Service(post_Data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message)
        }
    }
    )
    
    
    
    export const thunk_Add_Comment = createAsyncThunk(
      "post/add-comment",
      async (comment_Data, thunkAPI) => {
        try {
          return add_Comment_Service(comment_Data);
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.message);
        }
      }
    );