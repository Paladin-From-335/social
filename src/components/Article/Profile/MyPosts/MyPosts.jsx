import React from 'react';
import C from './MyPosts.module.css'
import Post from './Post/Post1';

const MyPosts = (props) => {

    let postElem = props.postsData.map((post) => <Post message={post.message} like={post.like} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div> <h1>My Posts</h1>
            <textarea ref={newPostElement}
                onChange={onPostChange}
                value={props.newPostText}
            />
            <br />
            <div> <button onClick={onAddPost}>Add post</button></div>
            <div className={C.posts}>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts; 