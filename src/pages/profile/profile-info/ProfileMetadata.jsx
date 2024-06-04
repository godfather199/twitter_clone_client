


function ProfileMetadata({profileName, totalPosts}) {
  return (
    <div className="">
      <div className="">
        <span className="">{profileName}</span>
      </div>

      <div className="">
        <span className="">{`${totalPosts} posts`}</span>
      </div>
    </div>
  )
}

export default ProfileMetadata