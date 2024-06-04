import {
  ProfileSettings,
  ToggleFollow,
  ProfileData,
  ProfileMedia,
  ProfileMetadata,
} from "../../";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const {user_Details, current_User} = useSelector(state => state.user)
  // console.log('User details: ', user_Details)


  return (
    <div className="">
      {/* Metadata */}
      <div className="">
        <ProfileMetadata
          profileName={user_Details?.name}
          totalPosts={user_Details?.posts?.length}
        />
      </div>

      {/* Photos */}
      <div className="">
        <ProfileMedia />
      </div>

      {/* User data */}
      <div className="flex justify-between">
        {/* Additional user info */}
        <div className="">
          <ProfileData profile={user_Details} />
        </div>

        {/* Profile settings & Toggle follow */}
        <div className="">
          {current_User && user_Details?._id === current_User?._id ? (
            <ProfileSettings />
          ) : (
            <ToggleFollow />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo