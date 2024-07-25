import { useEffect, useState } from 'react';
import {PostButtons, PostMetadata, PostContent, PostUserDetails} from '../'
import { useSelector } from 'react-redux';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useLocation } from 'react-router-dom';



function Post({post}) {
  const {pathname} = useLocation()
  const {current_User} = useSelector(state => state.user)

  const [currentPost, setCurrentPost] = useState('')
  const [repostStatus, setRepostStatus] = useState(false)

  // Verify repost status
  useEffect(() => {
    setRepostStatus(post?.repost.includes(current_User?._id))
  }, [post])



  return (
    <div
      // style={{ border: "3px solid black" }}
      className="border border-blue-400 w-[100%] md:w-[85%] flex flex-col gap-1 p-4 md:p-5 rounded-lg shadow-blue-100 shadow-xl"
    >
      {/* Repost status */}
      {repostStatus && pathname.split('/')[1] === 'profile' && (
        <div className="">
          <RepeatIcon style={{ color: "blue" }} />
          <span className="">You reposted</span>
        </div>
      )}

      {/* User details */}
      <PostUserDetails
        postUser={post.postedBy}
        postOriginTime={post.createdAt}
      />

      {/* Post content */}
      <PostContent text={post?.postText} pic={post?.postImage?.url} />

      {/* Post metadata */}
      <PostMetadata postOriginTime={post?.createdAt} />

      {/* Post buttons */}
      <PostButtons
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        postId={post?._id}
        {...post}
      />
    </div>
  );
}

export default Post