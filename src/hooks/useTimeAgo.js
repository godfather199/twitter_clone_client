import { formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"



const useTimeAgo = (timestamp) => {
    const [timeAgo, setTimeAgo] = useState('')

    useEffect(() => {
        const calculateTimeAgo = () => {
            const createdAt = new Date(timestamp)

            const timeAgoString = formatDistanceToNow(createdAt, {
                addSuffix: true
            })

            setTimeAgo(timeAgoString)
        }

        calculateTimeAgo()

        const intervalId = setInterval(() => {
            calculateTimeAgo()
        }, 60000)

        return () => clearInterval(intervalId)

    }, [timestamp])

    return {timeAgo}
}



export default useTimeAgo