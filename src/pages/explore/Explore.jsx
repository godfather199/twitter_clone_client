import {Search, SuggestedAccounts} from '../../components'
import {Trending} from '../'


function Explore() {
  return (
    <div className="flex">
      {/* Middle Section */}
      <div className="">
        {/* Search */}
        <Search />

        {/* Trending section */}
        <Trending />
      </div>

      {/* Right Section */}
      <SuggestedAccounts />
    </div>
  );
}

export default Explore