import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './style/admin.css'
import './style/sign_in.css'
import './style/sign_up.css'
// import './style/detail.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
     <App /> 
    </BrowserRouter>
   

)
