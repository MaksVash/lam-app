import React from 'react';
import { connect } from 'react-redux';
import { addDialogActionCriator, updateNewDialogActionCreator } from '../../redux/dialog-reduser';
import Dialogs from './Dialogs';



let mapStateToProps=(state)=>{
return{
dialogs : state.dialogsPage.dialogs,
messages: state.dialogsPage.messages,
newDialogText:state.dialogsPage.newDialogText
}
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateOnChenge:(text)=>{
            let action =updateNewDialogActionCreator(text);
            dispatch(action)
        },
        addMesseg:()=>{dispatch(addDialogActionCriator())}
    }
}

const DialogsConteiner =connect (mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsConteiner;