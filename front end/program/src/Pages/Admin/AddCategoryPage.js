import React from 'react'
import NavBarAdmin from '../../Components/Admin/NavBarAdmin'
import SideBarAdmin from '../../Components/Admin/SideBarAdmin'
import AddCategoryHook from '../../Hook/Category/add-category-hook'
import { Alert } from 'react-bootstrap'



const AddCategoryPage = () => {

    const [Name, Img, Loading, Ispress, onImgChange, handelSubmit, onNameChange] = AddCategoryHook()


    return (
        <div>


            <NavBarAdmin />
            <SideBarAdmin />

            <div className='container ' style={{ width: '71rem', backgroundColor: "#eee", position: 'absolute', top: '6rem', right: '0', minHeight: '85vh', paddingTop: '1rem' }}>

                <form className='col-xs-8 col-md-4 '>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className="d-flex justify-content-center mb-4">
                            <img src={Img} className="rounded-5" alt="example placeholder" style={{ width: "200px" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary btn-rounded">
                                <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                <input onChange={onImgChange} type="file" className="form-control d-none" id="customFile2" />
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center my-4 mx-5">
                            <label className="form-label" htmlFor="name"> Name Category </label>
                            <input
                                onChange={onNameChange}
                                value={Name}
                                type='text' id='name'
                                className='' />
                        </div>
                        <div className='d-flex ' style={{ justifyContent: 'flex-end', width: '100%' }}>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block mx-5"
                                style={{ justifyContent: 'flex-end', width: '200px' }}
                                onClick={handelSubmit}
                            >
                                Save
                            </button>


                            {
                                Ispress ? Loading ? (<div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>) : null : null
                            }
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default AddCategoryPage