import React from 'react'
import '../../assets/css/User/UserProfile.css'
import NavBar from '../../Components/utility/NavBar'
import UpdateClientInfo from '../../Hook/User/update-info-client-hook'


const UserProfilePage = () => {


    const [firstname, lastname, phone, street, BuildingNum, city, zipcode, email, img, Loading, userData, OnDisable, ButtonSubmit,
        onImgChange, onFirstNameChange, onLastNameChange, onPhoneChange, onStreetChange, onBuildingNumChange, onCityChange, onZipCodeChange, onEmailChange,
        handelSubmit] = UpdateClientInfo()

    return (
        <div className='ProfilePage'>

            <NavBar />

            <div class="container">
                <div class="row gutters">

                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" style={{ height: '230px', marginTop: '5rem' }}>
                        <div class="text-light card h-100" style={{ backgroundColor: 'grey' }}>
                            <div class="card-body">
                                <div class="account-settings">

                                    <div class="user-profile">
                                        <div class="user-avatar" style={{ position: 'relative' }}>
                                            <img src={img} alt="Maxwell Admin" style={{ zIndex: '1000' }} />
                                            <input onChange={onImgChange} disabled={OnDisable} type='file' alt='image_profile' style={{ position: 'absolute', border: 'red solid 1px', width: '5rem', height: '5rem', borderRadius: '50%', cursor: 'pointer', marginLeft: '-5.3rem', opacity: 0, zIndex: '100000' }} />
                                        </div>
                                        <h5 class="user-name">  {userData ? userData.firstname + ' ' + userData.lastname : 'your name'}  </h5>
                                        <h6 class="user-email"> {userData ? userData.email : 'your email'}  </h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 " style={{ marginTop: '5rem' }}>
                        <div class="card h-100">
                            <div class="card-body">
                                <div class="row gutters">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="firstname"> First name </label>
                                            <input value={firstname} onChange={onFirstNameChange} disabled={OnDisable} type="text" class="form-control my-3" id="firstname" placeholder="Enter first name" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="lastname"> Last name </label>
                                            <input value={lastname} onChange={onLastNameChange} disabled={OnDisable} type="text" class="form-control my-3" id="lastname" placeholder="Enter last name" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="phone">Phone</label>
                                            <input value={phone} onChange={onPhoneChange} disabled={OnDisable} type="tel" class="form-control my-3" id="phone" placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="email"> email </label>
                                            <input value={email} onChange={onEmailChange} disabled={OnDisable} type="email" class="form-control my-3" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row gutters">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="Street">Street</label>
                                            <input value={street} onChange={onStreetChange} disabled={OnDisable} type="name" class="form-control my-3" id="Street" placeholder="Enter Street" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="ciTy">City</label>
                                            <input value={city} onChange={onCityChange} disabled={OnDisable} type="name" class="form-control my-3" id="ciTy" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="sTate">Building number</label>
                                            <input value={BuildingNum} onChange={onBuildingNumChange} disabled={OnDisable} type="number" class="form-control my-3" id="sTate" placeholder="Enter Building number" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="zIp">Zip Code</label>
                                            <input value={zipcode} onChange={onZipCodeChange} disabled={OnDisable} type="text" class="form-control my-3" id="zIp" placeholder="Zip Code" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="d-flex justify-content-end">
                                            {/* <button type="button" id="submit" name="submit" class="btn btn-secondary mx-2">Cancel</button> */}
                                            <button onClick={handelSubmit} type="button" id="submit" name="submit" class="btn text-light" style={{ backgroundColor: ButtonSubmit === 'Save' ? '#E28B15' : 'green', width:'7rem' }}> {ButtonSubmit} </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserProfilePage