import { createSlice } from "@reduxjs/toolkit"
import {
  thunk_Trending_Hashtag,
} from "../thunks/hashtagThunk";

const initialState = {
    is_Loading: false,
    is_Success: false,
    is_Error: false,
    hashtags: [],
}


const hashtagSlice = createSlice({
    name: 'hashtag',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(thunk_Trending_Hashtag.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Trending_Hashtag.fulfilled, (state, {payload}) => {
            const {msg, all_Hashtags} = payload

            state.is_Loading = false
            state.hashtags = all_Hashtags
          })
          
    } 
})


export const {} = hashtagSlice.actions


export default hashtagSlice.reducer