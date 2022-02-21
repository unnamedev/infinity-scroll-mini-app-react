import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import {setLoading, setPosts, setStatus} from "./redux/actions"
import {BASE_URL} from "./config/constants"
import {Spinner} from "./components"
import {AiFillEye, AiFillLike, AiOutlineComment} from "react-icons/ai"

/**
 * App Component
 * @returns {JSX.Element}
 * @constructor
 */

const App = () => {
    /** 📍Hooks */
    const dispatch = useDispatch()
    const {posts, page, fetchStatus, postsCount, loading} = useSelector(state => state)

    useEffect(() => {
        if (fetchStatus) {
            const getPosts = async () => {
                try {
                    dispatch(setLoading(true))
                    const {data, headers} = await axios.get(`${BASE_URL}&_page=${page}`)
                    dispatch(setPosts({data, totalCount: headers["x-total-count"]}))
                } catch (e) {
                    console.log(e.message)
                } finally {
                    dispatch(setStatus(false))
                    dispatch(setLoading(false))
                }
            }

            getPosts()
        }
    }, [fetchStatus])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return () => document.removeEventListener("scroll", scrollHandler)
    }, [])

    /** 📍Functions */
    const scrollHandler = (e) => {
        const {scrollHeight} = e.target.documentElement
        const {scrollTop} = e.target.documentElement
        const {innerHeight} = window
        if (scrollHeight - (scrollTop + innerHeight) < 100 || posts.length < postsCount) dispatch(setStatus(true))
    }

    /** 📍Render */
    return <div className="app">
        <h1 className="app__heading">Infinity Scroll</h1>
        <ul className="app__list">
            {posts.map(post => (
                <li className="app__list-item" key={post.id}>
                    <div className="app__list-header">
                        <div className="app__list-image">IMAGE</div>
                    </div>
                    <h3 className="app__list-title">{post.title}</h3>
                    <div className="app__list-icons">
                        <AiFillEye size={25} color="#37435c"/>
                        <AiFillLike size={25} color="#37435c"/>
                        <AiOutlineComment size={25} color="#37435c"/>
                    </div>
                </li>
            ))}
        </ul>
        {loading &&
            <div className="app__loading">
                <h3 className="app__loading-title">Loading...</h3>
                <Spinner size={40}/>
            </div>
        }
    </div>
}

export default App
