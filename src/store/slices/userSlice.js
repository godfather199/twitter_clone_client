import { createSlice } from "@reduxjs/toolkit"
import { thunk_Fetch_User_By_Id, thunk_Login, thunk_Logout, thunk_Suggested_Account, thunk_Toggle_Bookmark, thunk_Toggle_Follow } from "../thunks/userThunk"
import toast from "react-hot-toast"

const initialState = {
    is_Loading: false,
    is_Success: false,
    toggle_Follow_Success: false,
    is_Error: false,
    current_User: null,
    user_Details: {},
    auth_Modal_State: false,
    auth_Modal_Type: 'Login Modal',
    suggested_Accounts: []
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_Auth_Modal: (state, {payload}) => {
            state.auth_Modal_State = !state.auth_Modal_State
            state.auth_Modal_Type = payload
        },
        reset_Success_State: (state) => {
            state.is_Success = false
            state.is_Error = false
        },
        reset_Toggle_Follow_Success: (state) => {
          state.toggle_Follow_Success = false
        },
        set_User_Details: (state, {payload}) => {
            state.user_Details = payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(thunk_Login.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Login.fulfilled, (state, {payload}) => {
            const {msg, userDetails} = payload

            state.current_User = userDetails
            state.is_Loading = false
            state.is_Success = true

            toast.success(msg, {
                duration: 1800,
                position: 'bottom-center'
            })
          })
          .addCase(thunk_Login.rejected, (state, {payload}) => {
            state.is_Loading = false
            state.is_Error = true

            toast.success(payload, {
                duration: 1800,
                position: 'bottom-center'
            })
          })
          .addCase(thunk_Logout.fulfilled, (state, {payload}) => {
            const {msg} = payload
            
            state.current_User = null
            state.suggested_Accounts = []
            
            toast.success(msg, {
                duration: 1800,
                position: 'bottom-center'
            })
          })
          .addCase(thunk_Suggested_Account.fulfilled, (state, {payload}) => {
            const {msg, suggested_Array} = payload

            state.suggested_Accounts = suggested_Array
          })
          .addCase(thunk_Toggle_Follow.pending, (state) => {
            state.is_Loading = true
          })
          .addCase(thunk_Toggle_Follow.fulfilled, (state, {payload}) => {
            const {msg, logged_In_User} = payload

            state.is_Loading = false
            state.current_User = logged_In_User
            state.toggle_Follow_Success = true

            toast.success(msg, {
              duration: 1500,
              position: 'bottom-center'
            })
          })
          .addCase(thunk_Fetch_User_By_Id.fulfilled, (state, {payload}) => {
            const {msg, user} = payload

            state.current_User = user
          })
          .addCase(thunk_Toggle_Bookmark.fulfilled, (state, {payload}) => {
            const {msg, user} = payload

            state.current_User = user

            toast.success(msg, {
              duration: 1500,
              position: 'bottom-center'
            })
          })
    }
})


export const {
  set_Auth_Modal,
  reset_Success_State,
  set_User_Details,
  reset_Toggle_Follow_Success,
} = userSlice.actions;

export default userSlice.reducer