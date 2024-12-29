import React from 'react'
import ResetPasswordHook from '../../Hook/Auth/reset-password-hook'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {


  const { id } = useParams()

  const [Password, PasswordConfirm, Loading, Errors, onPasswordChange, onPasswordConfirmChange, handelSubmit] = ResetPasswordHook(id)

  return (
    <div className="container">
      <h1 className="mt-5">Reset Password</h1>
      <form>
        <div className="form-group my-3">
          <label for="new-password">New Password</label>
          <input value={Password} onChange={onPasswordChange} type="password" className="form-control" id="new-password" name="new-password" />
          <p className='text-danger' style={{ fontSize: '.9rem' }}> {Errors ? Errors.password : null} </p>
        </div>
        <div className="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input value={PasswordConfirm} onChange={onPasswordConfirmChange} type="password" className="form-control" id="confirm-password" name="confirm-password" />
          <p className='text-danger' style={{ fontSize: '.9rem' }}> {Errors ? Errors.passwordConfirm : null} </p>
        </div>
        <button onClick={handelSubmit} type="submit" className="btn btn-primary my-3">
          {
            // Ispress ?
            Loading ? (<div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>) : " Reset Password"
            // : null
          }

        </button>
      </form>
    </div>
  )
}

export default ResetPassword