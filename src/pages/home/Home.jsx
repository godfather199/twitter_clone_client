import {SuggestedAccounts, Search,CreatePost, Posts} from '../../components'



function Home() {
  

  return (
    <div
      style={{ border: "3px solid purple" }}
      className="flex w-[23rem] sm:w-[30rem] md:w-[34rem] lg:w-[50rem] xl:w-[65rem]"
    >
      {/* Home feed */}
      <div
        style={{ border: "5px solid green" }}
        className="w-[100%] flex flex-col gap-[3rem] p-4"
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
        style={{ border: "4px solid red" }}
        className="w-[20rem] h-[18rem] hidden lg:block p-3 "
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