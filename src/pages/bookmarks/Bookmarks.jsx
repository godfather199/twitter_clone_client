import {Posts, SuggestedAccounts} from '../../components'


function Bookmarks() {
  return (
    <div style={{border: '5px solid green'}} className="flex relative w-[100%]">
      {/* Bookmarked Posts */}
      <div style={{border: '5px solid orange'}} className="w-[23rem] sm:w-[30rem] md:w-[90%] lg:w-[100%] xl:w-[100%]">
        <Posts />
      </div>

      {/* Suggested accounts */}
      <div className="w-[14.4rem] lg:w-[18rem] h-[18rem] hidden lg:block p-3 sticky top-[1rem] self-start">
        <SuggestedAccounts />
      </div>
    </div>
  );
}

export default Bookmarks




