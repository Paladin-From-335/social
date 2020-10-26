
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch) => {
    
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);

        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer; 