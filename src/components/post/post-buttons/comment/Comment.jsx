import {CommentInput, AllComments} from '../../../'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useState } from 'react';
import toast from 'react-hot-toast';


const styles = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  // top: 35,
  // right: 0,
  // left: 0,
  width: "35rem",
  zIndex: 1,
  // border: "1px solid",
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
  // const [openComment, setOpenComment] = useState(true);


  const handle_Open_Comment = () => {
    if(window.innerWidth < 1023) {
      return toast.error('Resize the window to view & post comments', {
        duration: '300',
        position: 'bottom-center'
      })
    }

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
        <div 
        style={{ position: "relative" }}
        >
          <ChatBubbleOutlineIcon
            style={{ cursor: "pointer", color: "blue" }}
            onClick={handle_Open_Comment}
          />
          {comments?.length ? comments?.length : null}

          {openComment && currentPost === postId ? (
            <div
              // style={styles}
              className=" bg-blue-400 rounded-lg p-5 shadow-lg  absolute -top-[34rem] right-0 left-0  hidden lg:block  lg:w-[35rem] h-[35rem] z-10 overflow-y-scroll"
              // className=" bg-blue-400 rounded-lg p-5 shadow-lg  absolute top-[2rem] right-0 left-0 hidden lg:block  lg:w-[35rem] z-10"
              // className="bg-white rounded-lg p-2 shadow-lg border-8 border-blue-400"
            >
              {/* Post a comment */}
              <CommentInput postId={postId} />

              {/* All comments */}
              <AllComments comments={comments} />
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}


