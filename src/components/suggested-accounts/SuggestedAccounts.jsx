import {SuggestedItem} from '../'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunk_Suggested_Account, thunk_Toggle_Follow } from "../../store/thunks/userThunk"
import { reset_Toggle_Follow_Success } from '../../store/slices/userSlice'


// Notes
// 1- The followers and following of currentuser should be updated
// 2- New suggested account list should be fetched
// 3- Timeline should show posts of followed users
// 4- currentuser should be refetched from the server



function SuggestedAccounts() {
  const dispatch = useDispatch()
  const {suggested_Accounts, current_User, toggle_Follow_Success} = useSelector(state => state.user)
  // console.log('Suggested: ', suggested_Accounts)

  const [loading_Id, setLoadingId] = useState('')

  // Fetch suggested account
  useEffect(() => {
    dispatch(thunk_Suggested_Account())
    setLoadingId('')
  }, [current_User])



  const handle_Follow = (userId) => {
    setLoadingId(userId)
    dispatch(thunk_Toggle_Follow(userId))
  }
  

  return (
    <div  className=" w-[19rem] ">
      <div className="">
        <span className=" text-2xl font-serif font-bold text-blue-400">Who to follow</span>
      </div>

      <div className="p-2">
        {suggested_Accounts?.map((account) => (
          <SuggestedItem
            key={account?._id}
            userInfo={account}
            handle_Follow={handle_Follow}
            loading_Id={loading_Id}
          />
        ))}
      </div>
    </div>
  );
}

export default SuggestedAccounts