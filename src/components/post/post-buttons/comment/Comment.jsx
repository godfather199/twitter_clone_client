import {CommentInput, AllComments} from '../../../'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useState } from 'react';


const styles = {
  position: "absolute",
  top: 28,
  right: 0,
  left: 0,
  width: "35rem",
  zIndex: 1,
  border: "1px solid",
  p: 1,
  bgcolor: 'white',
};


export default function Comment({
  currentPost,
  setCurrentPost,
  postId,
  comments,
}) {
  const [openComment, setOpenComment] = useState(false);


  const handle_Open_Comment = () => {
    setCurrentPost(postId);
    setOpenComment((prev) => !prev);
  };


  const handle_Close_Comment = () => {
    setOpenComment(false);
    setCurrentPost("");
  };



  return (
    <div className="">
      <ClickAwayListener onClickAway={handle_Close_Comment}>
        <div style={{ position: "relative" }}>
          <ChatBubbleOutlineIcon
            style={{ cursor: "pointer", color: 'blue' }}
            onClick={handle_Open_Comment}
          />
          {comments?.length ? comments?.length : null}

          {openComment && currentPost === postId ? (
            <div style={styles} className="bg-white">
              {/* Post a comment */}
              <div className="">
                <CommentInput postId={postId} />
              </div>

              {/* All comments */}
              <div className="">
                <AllComments comments={comments} />
              </div>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
