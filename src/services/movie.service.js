import {instance, baseAPIUrl} from "../api/instance";

export const getMovies = async (query) => {
    const url = baseAPIUrl + `movies${query ? '?q=' + query : ''}`

    try {
        return await instance.get(url)
    } catch (error) {
        throw error
    }
}