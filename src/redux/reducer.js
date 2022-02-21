import {SET_LOADING, SET_POSTS, SET_STATUS} from "../config/constants"

/**
 * Initial State
 * @type {{score: number, questionCategory: string, questionsAmount: number, questionDifficulty: string, questionType: string}}
 */

const initialState = {
    posts: [],
    page: 1,
    fetchStatus: true,
    postsCount: 0,
    loading: true
}

/**
 * Reducer
 * @param state
 * @param action
 * @returns {*}
 */
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS :
            return {
                ...state,
                posts: [...state.posts, ...action.payload.data],
                page: state.page + 1,
                postsCount: action.payload.totalCount
            }
        case SET_STATUS:
            return {
                ...state,
                fetchStatus: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}