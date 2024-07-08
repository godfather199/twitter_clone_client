import { useState } from "react";



const useItemHover = () => {
  const [currentHoverItemId, setCurrentHoverItemId] = useState("");


  const handle_Mouse_Enter = (itemId) => {
    setCurrentHoverItemId(itemId);
  };


  const handle_Mouse_Leave = () => {
    setCurrentHoverItemId("");
  };



  return { currentHoverItemId, handle_Mouse_Enter, handle_Mouse_Leave };
};



export default useItemHover