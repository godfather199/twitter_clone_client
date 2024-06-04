import useFormattedDate from "../../hooks/useFormattedDate"


function PostMetadata({postOriginTime}) {
  const {formattedDate, formattedTime} = useFormattedDate(postOriginTime)


  return (
    <div className="flex items-center gap-4">
        {/* Post time */}
        <div className="">
            <span className="">{formattedTime}</span>
        </div>

        {/* Post date */}
        <div className="">
            <span className="">{formattedDate}</span>
        </div>
    </div>
  )
}

export default PostMetadata

