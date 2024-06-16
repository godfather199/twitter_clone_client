import { useLocation } from 'react-router-dom'
import {Posts} from '../../components'


function TrendingPosts() {
   const {state: {word}} = useLocation() 
  return (
    <div className="">
      <div className="">
        <span className="">{`#${word}`}</span>
      </div>
      
      <Posts />
    </div>
  );
}

export default TrendingPosts