import {SET_LOADING, SET_POSTS, SET_STATUS} from "../config/constants"

/**
 * Set posts
 * @param payload
 * @returns {{payload, type: string}}
 */
export const setPosts = (payload) => ({
    type: SET_POSTS,
    payload,
})

/**
 * Set status
 * @param payload
 * @returns {{payload, type: string}}
 */
export const setStatus = (payload) => ({
    type: SET_STATUS,
    payload,
})

/**
 * Set loading
 * @param payload
 * @returns {{payload, type: string}}
 */
export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})
