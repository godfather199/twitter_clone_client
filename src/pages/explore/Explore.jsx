import {Search, SuggestedAccounts} from '../../components'
import {Trending} from '../'


function Explore() {
  return (
    <div style={{ border: "3px solid purple" }} className="flex h-full relative">
      {/* Middle Section */}
      <div
        style={{ border: "3px solid green" }}
        className="w-[100%] lg:w-[71%] flex flex-col items-center gap-10 "
      >
        {/* Search */}
        <div  className="w-[80%]">
          <Search />
        </div>

        {/* Trending section */}
        <Trending />
      </div>

      {/* Right Section */}
      <div className="w-[14.4rem] lg:w-[18rem] h-[18rem] hidden lg:block p-3 sticky top-[1rem] self-start">
        <SuggestedAccounts />
      </div>
    </div>
  );
}

export default Explore