const ADD_MESSEG='ADD-MESSEG';
const UPDATE_ON_CHANGE ='UPDATE-ON-CHANGE'

let initialState ={
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
}

const dialogReduser =(state=initialState,action)=>{
switch(action.type){
    case ADD_MESSEG:{
        let newMesseg ={
            id:6,
            message:state.newDialogText
                }
                return{
                    ...state,
                    messages:[...state.messages,newMesseg],
                    newDialogText:'' 
                }
               /*  let stateCopy ={...state};
                stateCopy.messages =[...state.messages];
                stateCopy.messages.push(newMesseg);
                stateCopy.newDialogText ='';
                return stateCopy; */
            }
              
         case UPDATE_ON_CHANGE:{
             return{
                 ...state,
                 messages:[...state.messages],
                 newDialogText:action.newDialogText
             }

           /*  let stateCopy ={...state};
            stateCopy.messages=[...state.messages]; 
            stateCopy.newDialogText =action.newDialogText;
           return stateCopy; */

         }
                default:
                    return state;
                }
}

export  const addDialogActionCriator =()=>({type:'ADD-MESSEG'})
export  const updateNewDialogActionCreator =(text)=>({type:'UPDATE-ON-CHANGE',newDialogText:text});

export default dialogReduser;