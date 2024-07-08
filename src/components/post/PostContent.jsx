

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
            className=" w-[100%] h-[11rem] md:w-[95%] md:h-[20rem] object-cover rounded-lg shadow-gray-200 shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default PostContent