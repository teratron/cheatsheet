import * as React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Go from './pages/Go'
import HTML from './pages/HTML'
import JavaScript from './pages/JavaScript'
import ReactJS from './pages/ReactJS'
import SCSS from './pages/SCSS'

import Spinner from './components/Spinner'
import logo from './static/media/logo.svg'
import './static/scss/app.scss'
import hljs from 'highlight.js'

//const Home = React.lazy(() => import('./pages/Home'));
//const About = React.lazy(() => import('./pages/About'));
const Html = hljs.highlightAuto('<h1>Hello World!</h1>').value

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <Html/>
                <img src={logo} className="App-logo" alt="logo"/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="go" element={<Go/>}/>
                    <Route path="html" element={<HTML/>}/>
                    <Route path="javascript" element={<JavaScript/>}/>
                    <Route path="reactjs" element={<ReactJS/>}/>
                    <Route path="scss" element={<SCSS/>}/>
                </Routes>
            </div>
        </React.Suspense>
    )
}

export default App
