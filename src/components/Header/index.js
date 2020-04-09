import React from "react"
import "../Header/style.css"
import {Link} from "react-router-dom"


function Header() {
    return (
        <section id="container">
            <section className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html">Trion Bailey</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <nav className="navbar-toggler-icon"></nav>
                    </button>
                    <nav className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About |</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio |</Link>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </section>
        </section>
    );
}

export default Header;