import React from 'react'

import './tiles.scss'

function Tiles() {
    return (
        <div className="app-tiles">
            {[1, 2, 3].map(
                value => {
                    return <div>{value}</div>
                }
            )}
        </div>
    )
}

export default Tiles