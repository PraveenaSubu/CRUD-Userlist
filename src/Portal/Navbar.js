import React from 'react'


import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid" >

                <span className="mr-2 d-none d-lg-inline text-gray-600"><img className="img-profile rounded-circle" style={{ width: 30 }}
                    src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/31-Mother-64.png" />Praveena S</span>
                <div>
                    <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>

    )
}

export default Navbar