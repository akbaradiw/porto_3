import React from "react"
import { useSelector } from 'react-redux'
import { selectAllPost } from '../../redux/features/post/postSlice'


const PostFeature = () => {
 const post = useSelector(selectAllPost)
const renderedPost = post.map(post => {
    <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
})
 

    return (
        <div>
            <h1>post feature</h1>
            {renderedPost}
        </div>
    )
}

export default PostFeature