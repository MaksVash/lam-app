import reportWebVitals from './reportWebVitals';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
import stor from './redux/redux-store';
import { Provider } from 'react-redux';



   
 const container =document.getElementById('root')
const root =ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
    <Provider store={stor}>
 <App />
 </Provider>
 </React.StrictMode>
 );



 reportWebVitals();