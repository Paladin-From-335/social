import profileReducer from "./profile-reducer";
import dialogsReducer from "./message-reducer";
import navbarReducer from "./navbar-reducer";



let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi world', like: 15, },
                { id: 2, message: 'My first post(second)', like: 25 },
                { id: 3, message: 'Pis', like: 12 },
                { id: 4, message: 'os', like: 999 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            usersData: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Jesus' },
                { id: 3, name: 'Jacob' },
                { id: 4, name: 'Jessica' },
                { id: 5, name: 'Jane' },
                { id: 6, name: 'Jerry' }
            ],
            messageData: [
                { id: 1, message: 'Huylow' },
                { id: 2, message: 'Я хожу по воде' },
                { id: 3, message: 'Жакоб или Якоб?' },
                { id: 4, message: 'Альба?' },
                { id: 5, message: 'Fuck' },
            ],
            newMessageBody: '',
        },
        navbar: {
            friendData: [
                { name: 'Jessica', id: 1 },
                { name: 'John', id: 2 },
                { name: 'Jacob', id: 3 }
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return (
            this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}



export default store;

window.store = store;
