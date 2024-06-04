import {Comment} from '../../'
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from 'react';




function PostButtons({currentPost, setCurrentPost, postId, comments}) {


  return (
    <div
      style={{ border: "3px solid red" }}
      className=" w-[80%] flex items-center justify-between"
    >
      {/* Comment */}
      <div className="">
        <Comment
          currentPost={currentPost}
          setCurrentPost={setCurrentPost}
          postId={postId}
          comments = {comments}
        />
      </div>

      {/* Repost */}
      <div className="">
        <RepeatIcon />
      </div>

      {/* Like */}
      <div className="">
        <FavoriteBorderIcon />
      </div>

      {/* Bookmark */}
      <div className="">
        <BookmarkBorderIcon />
      </div>
    </div>
  );
}

export default PostButtons