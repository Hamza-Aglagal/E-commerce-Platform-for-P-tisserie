import React, { useEffect, useState } from 'react'
import logo from './../../images/logo HD.png'
import '../../assets/css/home/NavBar.css'
import { BsCartFill } from 'react-icons/bs';
import user from '../../images/cack1.png'
import { Link, useNavigate } from 'react-router-dom';
import NavBarAdmin from '../Admin/NavBarAdmin';
import { ShowCart } from '../../Redux/Actions/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import AddToCartHook from '../../Hook/Cart/add-to-cart-hook';

const NavBar = ({ bg,position,top,width }) => {

    // const [Loading] = AddToCartHook()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setuser] = useState()
    const [NumItemCart, setNumItemCart] = useState()

    const ReloadNav = useSelector(state => state.CartRed.Reload)

    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            setuser(JSON.parse(localStorage.getItem("user")))
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem("NumofcartItems") != null) {
            setNumItemCart(localStorage.getItem("NumofcartItems"))
        }
        setShowAnimation('cart-icon-animation')

        setTimeout(() => {
            setShowAnimation('');
        }, 1000);

    }, [ReloadNav])




    const Logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setuser(null)
        navigate('/')
    }

    // animation icon Cart 
    const [ShowAnimation, setShowAnimation] = useState('')






    return (

        user ? user.role === "admin" ? (<NavBarAdmin />) :
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: bg, position:position,top:top, width:width }} >
                <div className="container-fluid">
                    <Link to='/'>
                        <a className="navbar-brand" href="#"> <img className='NavBar-logo' src={logo} alt='logo' /> </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link active color-NavLink" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link color-NavLink" href="#">bakery</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/about' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link color-NavLink">about</a>
                                </Link>
                            </li>
                        </ul>

                        <div className="cart-login-btn d-flex" style={{ width: user ? ('210px') : '310px' }}>

                            <div className="">
                                <Link to='/cart' className='d-flex cart me-2' style={{ textDecoration: 'none' }}>
                                    <BsCartFill className='icons-cart' />  /
                                    <p className={ShowAnimation}> {NumItemCart ? NumItemCart : 0} </p>
                                </Link>
                            </div>


                            {
                                user ? (
                                    <div className="dropdown icon-profile-navbar">
                                        <a
                                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                            href="#"
                                            id="navbarDropdownMenuAvatar"
                                            role="button"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src={user ? user.img ? (`http://127.0.0.1:8000/client/${user.img}`) : "https://bootdey.com/img/Content/avatar/avatar7.png" : "https://bootdey.com/img/Content/avatar/avatar7.png"}
                                                className="rounded-circle"
                                                height="25"
                                                alt="Black and White Portrait of a Man"
                                                loading="lazy"
                                            />
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar"
                                        >
                                            <li>
                                                <Link to='/user/profile'>
                                                    <a className="dropdown-item" href="#">My profile</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/user/orders'>
                                                    <a className="dropdown-item" href="#"> Orders</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <p style={{ cursor: 'pointer' }} className="dropdown-item" href="" onClick={Logout}>Logout</p>
                                            </li>
                                        </ul>
                                    </div>
                                ) :

                                    <div className='btns-Auth'>
                                        <Link to='login'>
                                            <button className="btn-login" type="submit">Login</button>
                                        </Link>
                                        <Link to='register'>
                                            <button className="btn-SignUp" type="submit">Sign Up</button>
                                        </Link>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </nav > :


            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: bg }} >
                <div className="container-fluid">
                    <Link to='/'>
                        <a className="navbar-brand" href="#"> <img className='NavBar-logo' src={logo} alt='logo' /> </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link active color-NavLink" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link color-NavLink" href="#">bakery</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/about' style={{ textDecoration: 'none' }}>
                                    <a className="nav-link color-NavLink">about</a>
                                </Link>
                            </li>
                        </ul>

                        <div className="cart-login-btn d-flex" style={{ width: user ? ('210px') : '310px' }}>

                            <div className="">
                                <Link to='/cart' className='d-flex cart me-2' style={{ textDecoration: 'none' }}>
                                    <BsCartFill className='icons-cart' />  /
                                    <p className={ShowAnimation}> {NumItemCart ? NumItemCart : 0} </p>
                                </Link>
                            </div>


                            {
                                user ? (
                                    <div className="dropdown icon-profile-navbar">
                                        <a
                                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                            href="#"
                                            id="navbarDropdownMenuAvatar"
                                            role="button"
                                            data-mdb-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src={user ? user.img ? (`http://127.0.0.1:8000/client/${user.img}`) : "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" : "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"}
                                                className="rounded-circle"
                                                height="25"
                                                alt="Black and White Portrait of a Man"
                                                loading="lazy"
                                            />
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar"
                                        >
                                            <li>
                                                <Link to='/user/profile'>
                                                    <a className="dropdown-item" href="#">My profile</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <p style={{ cursor: 'pointer' }} className="dropdown-item" href="" onClick={Logout}>Logout</p>
                                            </li>
                                        </ul>
                                    </div>
                                ) :

                                    <div className='btns-Auth'>
                                        <Link to='login'>
                                            <button className="btn-login" type="submit">Login</button>
                                        </Link>
                                        <Link to='register'>
                                            <button className="btn-SignUp" type="submit">Sign Up</button>
                                        </Link>
                                    </div>
                            }




                        </div>
                    </div>
                </div>
            </nav >
    )
}

export default NavBar