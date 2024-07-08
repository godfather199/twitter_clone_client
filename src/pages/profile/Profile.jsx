import {ProfileInfo} from '../'
import {Search, SuggestedAccounts, Posts} from '../../components'



function Profile() {
  return (
    <div style={{border: '3px solid purple'}} className=" flex ">
      {/* Middle section */}
      <div style={{border: '4px solid green'}} className="w-full lg:w-[80%] xl:w-[70%]">
        {/* Profile information */}
        <div className="mb-5">
          <ProfileInfo />
        </div>

        {/* User feed */}
        <div className="">
          <Posts />
        </div>
      </div>

      {/* Right section */}
      <div
        style={{ border: "4px solid black" }}
        // className="w-[20rem] h-[18rem] hidden lg:block p-3 "
        className="w-[14.4rem] xl:w-[18rem] h-[18rem] hidden xl:block p-2 sticky top-[1rem] self-start"
      >
        {/* Search Users */}
        <div className="mt-1">
          <Search />
        </div>

        {/* Suggested accounts */}
        <div className="mt-7">
          <SuggestedAccounts />
        </div>
      </div>
    </div>
  )
}

export default Profile