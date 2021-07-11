import React from 'react';

import Spinner from '../Spinner';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './app.scss';

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
