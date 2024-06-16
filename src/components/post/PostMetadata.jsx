import useFormattedDate from "../../hooks/useFormattedDate"


function PostMetadata({postOriginTime}) {
  const {formattedDate, formattedTime} = useFormattedDate(postOriginTime)


  return (
    <div
      style={{ border: "3px solid purple" }}
      className="flex items-center gap-2 ml-[3.6rem]"
    >
      {/* Post time */}
      <div className="">
        <span className="text-sm text-gray-500 font-semibold">{`${formattedTime} `}</span>
      </div>

      <span
        // style={{ border: "3px solid red" }}
        className="  font-semibold text-lg text-gray-500"
      >
        -
      </span>

      {/* Post date */}
      <div className="">
        <span className="text-sm text-gray-500 font-semibold">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}

export default PostMetadata

