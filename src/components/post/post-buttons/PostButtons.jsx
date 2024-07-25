import {BookmarkButton, Repost, Comment, Like} from '../../'
import { useState } from 'react';




function PostButtons({
  currentPost,
  setCurrentPost,
  postId,
  comments,
  likes,
  repost,
  postedBy
}) {
  return (
    <div
      style={{ border: "3px solid red" }}
      className=" w-[77%] md:w-[80%] flex items-center justify-between ml-[3.6rem]"
    >
      {/* Comment */}
      <div className="">
        <Comment
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          postId={postId}
          comments={comments}
        />
      </div>

      {/* Repost */}
        <div className="">
          <Repost repost={repost} postedBy={postedBy} postId={postId} />
      </div>

      {/* Like */}
      <div className="">
        <Like likes={likes} postId={postId} />
      </div>

      {/* Bookmark */}
      <div className="">
        <BookmarkButton postId = {postId} />
      </div>
    </div>
  );
}

export default PostButtons