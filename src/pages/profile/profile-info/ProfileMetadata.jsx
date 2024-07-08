


function ProfileMetadata({profileName, totalPosts}) {
  return (
    <div className="">
      <div className="">
        <span className="text-3xl font-serif font-semibold text-blue-400">{profileName}</span>
      </div>

      <div className="">
        <span className="text-lg font-semibold text-gray-400">{`${totalPosts} posts`}</span>
      </div>
    </div>
  )
}

export default ProfileMetadata