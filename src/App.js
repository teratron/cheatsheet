import React from 'react';

import Spinner from './components/Spinner';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './static/scss/app.scss';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </React.Suspense>
    );
}

export default App;
