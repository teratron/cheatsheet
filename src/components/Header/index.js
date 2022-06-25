import {Link} from 'react-router-dom'

import Container from '../Container'
import logo from '../../static/media/logo.svg'
import './header.scss'

function Header() {
    return (
        <header className="app-header">
            <Container>
                <Link to="/">
                    <img src={logo} className="logo" alt="logo"/>
                </Link>
                <nav>
                    <Link to="/go">Go</Link>
                    <Link to="/javascript">JavaScript</Link>
                    <Link to="/reactjs">ReactJS</Link>
                </nav>
            </Container>
        </header>
    )
}

export default Header
