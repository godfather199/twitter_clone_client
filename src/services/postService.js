import axios from "axios"



export const timeline_Posts_Service = async () => {
    const {data} = await axios.get(
        `/api/post/timeline`
    )

    return data
}



export const user_Posts_Service = async (userId) => {
    const {data} = await axios.get(
        `/api/post/user-posts/${userId}`
    )

    return data
}



export const create_Post_Service = async (post_Data) => {
    const {data} = await axios.post(
        `/api/post/create-post`, post_Data
    )

    return data
}



export const add_Comment_Service = async ({postId, comment_Text}) => {
    const {data} = await axios.post(
        `/api/post/add-comment${postId}`, comment_Text
    )

    return data
}