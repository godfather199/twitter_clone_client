import axios from "axios"


export const login_Service = async (user_Data) => {
    const {data} = await axios.post(
        `/api/user/login`, user_Data
    )

    return data
}



export const logout_Service = async () => {
    const {data} = await axios.post(
        `/api/user/logout`
    )

    return data
}



export const search_User_Service = async (search_Data) => {
    const {data} = await axios.get(
        `/api/user/search?userQuery=${search_Data}`
    )

    return data
}



export const suggested_Accounts_Service = async () => {
    const {data} = await axios.get(
        `/api/user/suggested-accounts`
    )

    return data
}



export const toggle_Follow_Service = async (userId) => {
    const {data} = await axios.post(
        `/api/user/toggle-follow/${userId}`
    )

    return data
}



export const fetch_User_By_Id_Service = async (userId) => {
    const {data} = await axios.get(
        `/api/user/${userId}`
    )

    return data
}



export const toggle_Bookmark_Service = async (postId) => {
    const {data} = await axios.post(
        `/api/user/toggle-bookmark/${postId}`
    )

    return data
}



export const upload_User_Media = async (media_Data) => {
    const {data} = await axios.post(
        `/api/user/upload-media`, media_Data
    )

    return data
}



export const user_Authentication_Service = async () => {
    try {
        const {data} = await axios.get(
            `/api/user/authenticate-user`
        )

        return data
    } catch (error) {
        return error.response.data
    }
}