import React, { useEffect, useState } from 'react'
import logo from '../../images/logo HD.png'
import '../../assets/css/Admin/NavBarAdmin.css'
import { Link, useNavigate } from 'react-router-dom'

const NavBarAdmin = () => {

    const navigate = useNavigate()

    const Logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        // setuser(null)
        navigate('/')
    }



    const [admin, setadmin] = useState()

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            setadmin(JSON.parse(localStorage.getItem("user")))
        }
    }, [])


    return (
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{ background: 'linear-gradient(to right, #0c629190, #0c6291 70%)' }}>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <a className="navbar-brand" href="/">
                    <img
                        src={logo}
                        height="35"
                        alt=""
                        loading="lazy"
                    />
                </a>


                <ul className="navbar-nav ms-auto d-flex flex-row">

                    <li className="nav-item">
                        <h5 className='pt-3 text-light'> {admin ? admin.firstname + ' ' + admin.lastname : null} </h5>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                className="rounded-circle"
                                width="35"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <Link to="/admin/allProduct">
                                    <a className="dropdown-item" href=""> dashbord </a>
                                </Link>
                            </li>
                            <li><a onClick={Logout} className="dropdown-item" href="">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarAdmin