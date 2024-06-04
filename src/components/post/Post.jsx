import { useState } from 'react';
import {PostButtons, PostMetadata, PostContent, PostUserDetails} from '../'


function Post({post}) {
  const [currentPost, setCurrentPost] = useState('')

  return (
    <div style={{ border: "3px solid black" }} className="">
      {/* User details */}
      <div className="">
        <PostUserDetails
          postUser={post.postedBy}
          postOriginTime={post.createdAt}
        />
      </div>

      {/* Post content */}
      <div className="">
        <PostContent text={post?.postText} pic={post?.postImage?.url} />
      </div>

      {/* Post metadata */}
      <div className="">
        <PostMetadata postOriginTime={post?.createdAt} />
      </div>

      {/* Post buttons */}
      <div className="">
        <PostButtons
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          postId = {post?._id}
          comments = {post?.comments}
        />
      </div>
    </div>
  );
}

export default Post