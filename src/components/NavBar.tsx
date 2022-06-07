import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
export default function NavBar() {
    return (
        <>
            <div className="navBar">
            <Link to="/" id="Home">Home</Link>
            <Link to="/" id="say-hi">Say Hi</Link>
            </div>
        </>
    )
}
