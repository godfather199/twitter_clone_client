


function NoPostsFound({title}) {
  return (
    <div className=" relative p-4">
      <div
        style={{ border: "3px solid red" }}
        className=" absolute top-[40%] left-[10%] w-[80%] lg:w-[75%]  h-[5rem] text-2xl    md:h-[7rem] md:text-3xl bg-red-400 text-white   flex items-center justify-center   font-bold shadow-lg rounded-lg"
      >
        <span className="">No {title} Found</span>
      </div>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544943.jpg?size=626&ext=jpg&ga=GA1.1.453334623.1714042499&semt=ais"
        alt=""
        className="h-[15rem] md:h-[30rem] w-[60rem] object-cover shadow-lg rounded-lg"
      />
    </div>
  );
}

export default NoPostsFound;



  