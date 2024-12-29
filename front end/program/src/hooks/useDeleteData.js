import baseUrl from "../Api/baseUrl"



export const useDeleteData = async(url, params) => {
    const res = await baseUrl.delete(url, params)
    return res
}

