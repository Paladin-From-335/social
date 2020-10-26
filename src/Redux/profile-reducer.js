const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialState = {

    postsData: [
        { id: 1, message: 'Hi world', like: 15, },
        { id: 2, message: 'My first post(second)', like: 25 },
        { id: 3, message: 'Pis', like: 12 },
        { id: 4, message: 'os', like: 999 },
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };

            return{
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE :{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export default profileReducer;