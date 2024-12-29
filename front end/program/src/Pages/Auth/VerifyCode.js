import React from 'react'
import '../../assets/css/Auth/VerifyCode.css'
import VerifyCodeHook from '../../Hook/Auth/verify-code-hook'


const VerifyCode = () => {

    const [Code, onCodeChange, Errors, handelSubmit, Loading] = VerifyCodeHook()

    return (
        <div>
            <div className="container">
                {/* <!-- Instructions --> */}
                <div className="row">
                    <div className="alert alert-success col-md-12" role="alert" id="notes">
                        <h4>NOTES</h4>
                        <ul>
                            <li>You will receive a verification code after you enter your mail</li>
                            <li>If somehow, you did not recieve the verification email then <a href="#">resend the verification email</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Verification Entry Jumbotron --> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <h2>Enter the  code</h2>
                            <form >
                                <div className="col-md-9 col-sm-12">
                                    <div className="form-group form-group-lg">
                                        <input value={Code} onChange={onCodeChange} type="text" className="form-control col-md-6 col-sm-6 col-sm-offset-2" name="verifyCode" />
                                        <button onClick={handelSubmit} className="btn btn-primary "style={{width:'100px'}} >
                                            {
                                                // Ispress ?
                                                Loading ? (<div className="spinner-border" role="status" style={{width:'17px', height:'17px'}} >
                                                    <span className="sr-only">Loading...</span>
                                                </div>) : "Verify"
                                                // : null
                                            }
                                        </button>
                                    </div>
                                    <div className='text-danger' style={{ fontSize: '.9rem' }}>
                                        {
                                            Errors ? Errors : null
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyCode