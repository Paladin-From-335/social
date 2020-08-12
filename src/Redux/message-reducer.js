const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default dialogsReducer