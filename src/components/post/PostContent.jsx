

function PostContent({text, pic}) {
  return (
    <div
      // style={{ border: "3px solid green" }}
      className="flex flex-col gap-3 ml-[3.6rem]"
    >
      {/* Post text */}
      {text && (
        <div className="">
          <span className="text-sm sm:text-lg text-gray-600 font-sans font-light">
            {text}
          </span>
        </div>
      )}

      {/* Post pic */}
      {pic && (
        <div className="">
          <img
            src={pic}
            alt=""
            className=" w-[100%] h-[8rem] md:w-[97%] md:h-[15rem] object-cover rounded-lg shadow-gray-200 shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default PostContent