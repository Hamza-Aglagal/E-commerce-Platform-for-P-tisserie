import React, { useEffect } from 'react'
import '../../assets/css/Auth/Login.css'
import logo from '../../images/logo HD.png'
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LoginHook from '../../Hook/Auth/login-hook';

const Login = () => {

    const [Email, Password, onEmailChange, onPasswordChange, Errors, handelSubmit, ShowPassword, Loading] = LoginHook()

    // useEffect(() => {
    //     // console.log('errooors : ',Errors)
    // }, [Errors])



    return (
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(to right, #222831, #222831bd , #222831bd )', color: "white" }}>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <Link to='/'>
                                <img src={logo} className="img-fluid" alt="Sample image" />
                            </Link>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <FaFacebook />
                                    </button>

                                    <button type="button" className="btn btn-danger btn-floating mx-1">
                                        <AiFillGoogleCircle />
                                    </button>

                                    <button type="button" className="btn btn-dark btn-floating mx-1">
                                        <BsGithub />
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className=" mb-4">
                                    <label className="form-label text-secondary" for="form3Example3">Email address</label>
                                    <input value={Email} onChange={onEmailChange} type="email" id="form3Example3" className="form-control"
                                        placeholder="Enter a valid email address" />
                                    <div className='text-danger'>
                                        {Errors ? Errors.email : ''}
                                    </div>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className=" mb-3">
                                    <label className="form-label text-secondary" for="InputPassword">Password</label>
                                    <input value={Password} onChange={onPasswordChange} type="password" id="InputPassword" className="form-control " placeholder="Enter password" />

                                    <div className='text-danger'>
                                        {Errors ? Errors.password : ''}
                                    </div>

                                    <input type="checkbox" id='checkboxShow' onClick={ShowPassword} />
                                    <label className="form-label text-secondary mx-3" for="checkboxShow" style={{ fontSize: '.9rem' }}> Show Password </label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                        <Link to='/register'>
                                            <a href="" className="link-danger">Register</a>
                                        </Link>
                                    </p>
                                    <Link to='/user/forget-password'>
                                        <a href="" className="text-white">Forgot password?</a>
                                    </Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={handelSubmit} type="button" className="btn  btn-lg" style={{ backgroundColor: '#E28B15', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}> Login </button>
                                    {
                                        // Ispress ?
                                        Loading ? (<div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>) : null
                                        // : null
                                    }

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Login