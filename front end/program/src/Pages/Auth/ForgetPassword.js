import React from 'react'
import imgforget from '../../images/forgetpasword.png'
import { Link } from 'react-router-dom'
import ForgetPasswordHook from '../../Hook/Auth/forget-password-hook'


const ForgetPassword = () => {


    const [Email, onEmailChange, Errors, handelSubmit, Loading] = ForgetPasswordHook()

    return (
        <div>
            <section className="container-fuild d-flex flex-column" style={{ background: 'linear-gradient(to right, #222831, #222831bd , #222831bd )' }}>
                <div className="row align-items-center justify-content-center g-0 min-vh-100" >
                    <div className="col-lg-5 col-md-8 py-8 py-xl-0">
                        {/* <!-- Card --> */}
                        <div className="card shadow">
                            {/* <!-- Card body --> */}
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <a href="../index.html"><img src={imgforget} className="mb-4" alt="logo-icon" /></a>
                                    <h1 className="mb-1 fw-bold">Forgot Password</h1>
                                    <p>Fill the form to reset your password.</p>
                                </div>
                                {/* <!-- Form --> */}
                                <form>
                                    {/* <!-- Email --> */}
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input value={Email} onChange={onEmailChange} type="email" id="email" className="form-control" name="email" placeholder="Enter Your Email " required="" />
                                        <div className='text-danger' style={{ fontSize: '.9rem', marginLeft: '15px' }}>
                                            {
                                                Errors ? Errors.email : null
                                            }
                                        </div>
                                    </div>
                                    {/* <!-- Button --> */}
                                    <div className="mb-3 d-grid">
                                        <button onClick={handelSubmit} type="submit" className="btn btn-primary">
                                            {
                                                // Ispress ?
                                                Loading ? (<div className="spinner-border" role="status" >
                                                    <span className="sr-only">Loading...</span>
                                                </div>) : 'Send Resest Link'
                                                // : null
                                            }
                                            
                                        </button>
                                    </div>
                                    <span>Return to
                                        <Link to='/login'>
                                            <a href="">sign in</a>
                                        </Link>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </section >




        </div >
    )
}

export default ForgetPassword