import React from 'react'
import '../../assets/css/Auth/Register.css'
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import logo from '../../images/logo HD.png'
import { Link } from 'react-router-dom';
import RegisterHook from '../../Hook/Auth/register-hook';



const Register = () => {

    const [FirstName, LastName, Email, Password, onFirstNameChange, onLastNameChange, onEmailChange, onPasswordChange, errors, handelSubmit, ShowPassword, Loading] = RegisterHook()

    return (
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(to right, #222831, #222831bd , #222831bd )', color: "white" }}>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-around align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                            <h2 className="fw-bold mb-5">Sign up now</h2>
                            <form>
                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="">
                                            <label className="form-label text-secondary" for="form3Example1">First name</label>
                                            <input value={FirstName} onChange={onFirstNameChange} type="text" id="form3Example1" className="form-control" />
                                            <div className='text-danger'>
                                                {Object.keys(errors).length > 0 ? errors.firstname : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="">
                                            <label className="form-label text-secondary" for="form3Example2">Last name</label>
                                            <input value={LastName} onChange={onLastNameChange} type="text" id="form3Example2" className="form-control" />
                                            <div className='text-danger'>
                                                {Object.keys(errors).length > 0 ? errors.lastname : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className=" mb-4">
                                    <label className="form-label text-secondary" for="form3Example3">Email address</label>
                                    <input value={Email} onChange={onEmailChange} type="email" id="form3Example3" className="form-control" />
                                    <div className='text-danger'>
                                        {Object.keys(errors).length > 0 ? errors.email : null}
                                    </div>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className=" mb-4">
                                    <label className="form-label text-secondary" for="InputPassword">Password</label>
                                    <input value={Password} onChange={onPasswordChange} type="password" id="InputPassword" className="form-control" />
                                    <div className='text-danger'>
                                        {Object.keys(errors).length > 0 ? errors.password : null}
                                    </div>
                                    <input type="checkbox" id='checkboxShow' onClick={ShowPassword} />
                                    <label className="form-label text-secondary mx-3" for="checkboxShow" style={{ fontSize: '.9rem' }}> Show Password </label>

                                </div>

                                {/* <!-- Checkbox --> */}
                                <div className="form-check d-flex justify-content-end mb-4">
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Do you have account?
                                        <Link to='/login'>
                                            <a href="" className="link-danger">Login</a>
                                        </Link>
                                    </p>
                                </div>

                                {/* <!-- Submit button --> */}
                                <div className='d-flex'>
                                    <button onClick={handelSubmit} type="submit" style={{ width: '400px', backgroundColor: '#E28B15', paddingLeft: '2.5rem', paddingRight: '2.5rem' }} className="btn btn-block mb-3">
                                        Sign up
                                    </button>
                                    {
                                        // Ispress ?
                                        Loading ? (<div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>) : null
                                        // : null
                                    }
                                </div>

                                {/* <!-- Register buttons --> */}
                                <div className="text-center">
                                    <p>or sign up with:</p>
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
                            </form>
                        </div>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <Link to='/'>
                                <img src={logo} className="img-fluid" alt="Sample image" />
                            </Link>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Register