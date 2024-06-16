import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  trending_Hashtags_Service,
} from "../../services/hashtagService";

export const thunk_Trending_Hashtag = createAsyncThunk(
  "hashtag/trending",
  async (thunkAPI) => {
    try {
      return await trending_Hashtags_Service();
    } catch (error) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
