import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messege/Messege';


const Dialogs = (props) => {


let dialogsElements = props.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
let messagesElements = props.messages.map( m => <Message key={m.id} message={m.message}/> );

let newDialogElement = React.createRef();

let addMesseg = ()=>{
   props.addMesseg(); 
}

let updateOnChenge=()=>{
    let text =  newDialogElement.current.value;
    props.updateOnChenge(text);
  
}


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
        <textarea onChange={updateOnChenge} 
       ref={newDialogElement}
        value={props.newDialogText}></textarea>
        </div>
        <div>
        <button onClick={addMesseg}>ADD</button>
    </div>
        </div>
    )
}

export default Dialogs;