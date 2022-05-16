const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

let initialState ={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'

}


const profileReduser =(state=initialState,action)=>{
switch(action.type){
    case ADD_POST:{
        let newPost ={
            id:5,
            message:state.newPostText,
            likesCount:0
        };
        return{
            ...state,
            posts:[...state.posts,newPost],
            newPostText:''
        }
     /*    let stateCopi ={...state};
        stateCopi.posts=[...state.posts];
        stateCopi.posts.push(newPost);
stateCopi.newPostText='';
return stateCopi; */
    }

case UPDATE_NEW_POST_TEXT:{
    return{
        ...state,
        posts:[...state.posts],
        newPostText:action.newText
    }
/* let stateCopi ={...state};
stateCopi.posts=[...state.posts];
stateCopi.newPostText = action.newText;
return stateCopi; */
}
    default:
        return state;

    } 
    
}

export const  addPostActionCreator=()=>({type:'ADD-POST'})
export const  updateNewPostActionCreator=(text)=>({type:'UPDATE-NEW-POST-TEXT',newText:text})
export default profileReduser;






