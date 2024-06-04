import {SuggestedAccounts, Search,CreatePost, Posts} from '../../components'



function Home() {
  

  return (
    <div style={{ border: "3px solid purple" }} className="flex w-[80rem]">
      {/* Home feed */}
      <div style={{ border: "3px solid black" }} className="w-[60%] p-10">
        {/* Create post */}
        <div className="">
          <CreatePost />
        </div>

        {/* Timeline posts */}
        <div className="">
          <Posts />
        </div>
      </div>

      {/* Right section */}
      <div className="w-[40%]">
        {/* Search Users */}
        <div className="">
          <Search />
        </div>

        {/* Suggested accounts */}
        <div className="">
          <SuggestedAccounts />
        </div>
      </div>
    </div>
  );
}

export default Home