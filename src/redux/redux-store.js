import {combineReducers, legacy_createStore as createStore } from "redux";
import dialogReduser from "./dialog-reduser";
import profileReduser from "./profile-reduser";
import usersReducer from "./users-reducer";



let redusers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogReduser,
    usersPage:usersReducer
});

let stor =createStore(redusers);

window.stor=stor

export default stor;