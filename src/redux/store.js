import dialogReduser from "./dialog-reduser";
import profileReduser from "./profile-reduser";

let stor={
_state :{
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        newDialogText:'New Dialog'
    },
    sidebar: {}
},
_callSubscriber(){
    console.log('sdsf')
},
subscriber(observer){
    this._callSubscriber = observer
},
getState(){
    return this._state;
},

     
dispach(action){
    this._state.profilePage = profileReduser(this._state.profilePage,action);
    this._state.dialogsPage = dialogReduser(this._state.dialogsPage,action);
this._callSubscriber(this._state)
} 
}

export default stor;