import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="App">
            <h2 style={{ marginTop: "20px" }}>404 Page Not Found</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}


export default NotFound