import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Go from './pages/Go'
import Home from './pages/Home'
import HTML from './pages/HTML'
import JavaScript from './pages/JavaScript'
import ReactJS from './pages/ReactJS'
import SCSS from './pages/SCSS'

import reportWebVitals from './reportWebVitals'
import './static/scss/index.scss'

const root = document.getElementById('root')
root.className = 'app'

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="go" element={<Go/>}/>
                <Route path="javascript" element={<JavaScript/>}/>
                <Route path="reactjs" element={<ReactJS/>}/>
                <Route path="html" element={<HTML/>}/>
                <Route path="scss" element={<SCSS/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
