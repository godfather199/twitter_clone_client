import {
  ProfileSettings,
  ToggleFollow,
  ProfileData,
  ProfileMedia,
  ProfileMetadata,
} from "../../";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const {user_Details, current_User, is_Loading} = useSelector(state => state.user)
  // console.log('User details: ', user_Details)
  // console.log('Current user: ', current_User)


  return (
    <div className="p-5 flex flex-col gap-5">
      {/* Metadata */}
      <div className="">
        <ProfileMetadata
          profileName={user_Details?.name}
          totalPosts={user_Details?.posts?.length}
        />
      </div>

      {/* Photos */}
      <div className="">
        <ProfileMedia
          profile={user_Details?.displayPicture?.url}
          cover={user_Details?.coverPicture?.url}
        />
      </div>

      {/* User data */}
      <div  className="flex justify-between w-[95%]">
        {/* Additional user info */}
        <div className="">
          <ProfileData profile={user_Details} />
        </div>

        {/* Profile settings & Toggle follow */}
        <div className="">
          {current_User && user_Details?._id === current_User?._id ? (
            <ProfileSettings />
          ) : (
            <ToggleFollow
              followingUsersInfo={current_User?.following}
              currentProfileInfo={user_Details?._id}
              is_Loading = {is_Loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo