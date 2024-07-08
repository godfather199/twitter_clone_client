import {SuggestedAccounts, Search,CreatePost, Posts} from '../../components'



function Home() {
  

  return (
    <div
      style={{ border: "3px solid purple" }}
      className="flex w-[23rem] sm:w-[30rem] md:w-[90%] lg:w-[100%] xl:w-[100%] relative"
    >
      {/* Home feed */}
      <div
        style={{ border: "5px solid green" }}
        className="w-[95%] flex flex-col gap-[3rem] p-4"
      >
        {/* Create post */}
        <div  className="">
          <CreatePost />
        </div>

        {/* Timeline posts */}
        <div className="">
          <Posts />
        </div>
      </div>

      {/* Right section */}
      <div
        style={{ border: "4px solid black" }}
        // className="w-[20rem] h-[18rem] hidden lg:block p-3 "
        className="w-[14.4rem] xl:w-[18rem] h-[18rem] hidden xl:block p-2 sticky top-[1rem] self-start"
      >
        {/* Search Users */}
        <div className="mt-1">
          <Search />
        </div>

        {/* Suggested accounts */}
        <div className="mt-7">
          <SuggestedAccounts />
        </div>
      </div>
    </div>
  );
}

export default Home