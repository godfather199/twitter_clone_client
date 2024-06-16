import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunk_Toggle_Bookmark } from '../../../../store/thunks/userThunk';



function BookmarkButton({postId}) {
  const dispatch = useDispatch()
  const {current_User} = useSelector(state => state.user)
  
  const [isBookmarked, setISBookmarked] = useState(false)


  // Check if the current post is bookmarked
  useEffect(() => {
    setISBookmarked(current_User?.bookmarks?.includes(postId));
  }, [current_User])


  const handle_Bookmark_Post = () => {
    dispatch(thunk_Toggle_Bookmark(postId))
  }

  
  return (
    <div className="" onClick={handle_Bookmark_Post}>
      {isBookmarked ? (
        <BookmarkIcon style={{ color: "blue" }} />
      ) : (
        <BookmarkBorderIcon style={{ color: "blue" }} />
      )}
    </div>
  );
}

export default BookmarkButton