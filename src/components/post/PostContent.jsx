

function PostContent({text, pic}) {
  return (
    <div className="">
      {/* Post text */}
      {text && (
        <div className="">
          <span className="">{text}</span>
        </div>
      )}

      {/* Post pic */}
      {pic && (
        <div className="">
            <img src= {pic} alt="" className=" w-[85%] h-[15rem] object-cover" />
        </div>
      )}
    </div>
  );
}

export default PostContent