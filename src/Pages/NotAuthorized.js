import React from 'react'
import { Link } from 'react-router-dom'

function NotAuthorized() {
    return (
        <div className="App">
            <h2 style={{ marginTop: "20px" }}>Sorry.. you are not authorized to access this page</h2>
            <Link to="/">Go Back</Link>
        </div>
    )
}


export default NotAuthorized