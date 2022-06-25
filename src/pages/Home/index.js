import React from 'react'

import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import Tiles from '../../components/Tiles'

function Home(_props) {
    return (
        <React.Fragment>
            <Header/>
            <Main>
                Home
                <Tiles/>
            </Main>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
