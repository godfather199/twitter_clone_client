import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetch_User_By_Id_Service, login_Service, logout_Service, suggested_Accounts_Service, toggle_Bookmark_Service, toggle_Follow_Service } from "../../services/userService";


export const thunk_Login = createAsyncThunk(
  "user/login",
  async (user_Data, thunkAPI) => {
    try {
      return await login_Service(user_Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);



export const thunk_Logout = createAsyncThunk(
  'user/logout', async (thunkAPI) => {
    try {
      return await logout_Service();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
)



export const thunk_Suggested_Account = createAsyncThunk(
  'user/suggested-account', async (thunkAPI) => {
    try {
      return await suggested_Accounts_Service()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)



export const thunk_Toggle_Follow = createAsyncThunk(
  'user/toggle-follow', async (userId, thunkAPI) => {
    try {
      return await toggle_Follow_Service(userId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)



export const thunk_Fetch_User_By_Id = createAsyncThunk(
  'user/user-by-id', async (userId) => {
    try {
      return await fetch_User_By_Id_Service(userId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)



export const thunk_Toggle_Bookmark = createAsyncThunk(
  'user/toggle-bookmark', async (postId, thunkAPI) => {
    try {
      return await toggle_Bookmark_Service(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
)