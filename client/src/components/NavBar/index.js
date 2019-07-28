import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Google Books</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search
            </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;