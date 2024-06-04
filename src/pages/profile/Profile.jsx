import {ProfileInfo} from '../'
import {Posts} from '../../components'



function Profile() {
  return (
    <div className="flex">
      {/* Middle section */}
      <div className="">
        {/* Profile information */}
        <div className="">
          <ProfileInfo />
        </div>

        {/* User feed */}
        <div className="">
          <Posts />
        </div>
      </div>

      {/* Right section */}
      <div className="">
        <span className="">Right section</span>
      </div>
    </div>
  )
}

export default Profile