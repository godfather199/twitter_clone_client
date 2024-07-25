import { useLocation } from 'react-router-dom'
import {SuggestedAccounts, Posts} from '../../components'


function TrendingPosts() {
   const {state: {word}} = useLocation() 


  return (
    <div style={{ border: "5px solid green" }} className=" flex p-0 md:p-3">
      <div
        style={{ border: "5px solid black" }}
        // className="flex flex-col items-center justify-center gap-5"
      className="flex flex-col items-center gap-5 w-[100%] sm:w-[95%] md:w-[100%] lg:w-[80%] relative"
      >
        <div style={{border: '3px solid red'}} className="mt-5 w-[80%]">
          <span className="text-2xl text-blue-400 font-bold">{`#${word}`}</span>
        </div>

        <div style={{ border: "5px solid orange" }} className="w-[100%] md:w-[90%] lg:w-[80%]">
          <Posts />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[14.4rem] xl:w-[18rem] h-[18rem] hidden xl:block p-3">
        <SuggestedAccounts />
      </div>
    </div>
  );
}

export default TrendingPosts







