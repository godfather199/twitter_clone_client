import axios from "axios"


export const login_Service = async (user_Data) => {
    const {data} = await axios.post(
        `/api/user/login`, user_Data
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