import axios from "axios"

/**
 * Fetch data
 * @returns {Promise<void>}
 */
export const fetchData = async (url = "") => {
    try {
        return await axios.get(url)
    } catch (e) {
        console.log(e.message)
    }
}
