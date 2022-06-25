import './container.scss'

function Container(props) {
    return (
        <div className="app-container">
            {props.children}
        </div>
    )
}

export default Container
