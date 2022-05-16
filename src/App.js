import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Components/Heder/Header';
import DialogsContainr from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';



const App = (props) => {
    return (
      <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainr /> }/>

                    <Route path='/profile'
                           element={<Profile /> }/>
                     <Route path='/users'
                           element={<UsersContainer/> }/>

                           </Routes>
                </div>
            </div>
            </BrowserRouter>
        )
}

export default App;