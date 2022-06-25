import Container from '../Container'
import './main.scss'

function Main(props) {
    return (
        <main className="app-main">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default Main
