import { format, parseISO } from "date-fns"
import { useEffect, useState } from "react"

const useFormattedDate = (isoDateString) => {
    const [formattedDate, setFormattedDate] = useState('')
    const [formattedTime, setFormattedTime] = useState('')


    // Parse date & time from given string
    useEffect(() => {
        if(isoDateString) {
            const date = parseISO(isoDateString)

            const dateFormat = format(date, 'MMMM d, yyyy')
            setFormattedDate(dateFormat)

            const timeFormat = format(date, 'hh:mm a')
            setFormattedTime(timeFormat)
        }

    }, [isoDateString])

    return {formattedDate, formattedTime}
}


export default useFormattedDate