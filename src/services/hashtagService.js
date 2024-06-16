import axios from "axios"



export const trending_Hashtags_Service = async () => {
    const {data} = await axios.get(
        `/api/hashtag/trending`
    )

    return data
}



