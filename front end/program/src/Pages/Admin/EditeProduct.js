import React from 'react'
import NavBarAdmin from '../../Components/Admin/NavBarAdmin'
import SideBarAdmin from '../../Components/Admin/SideBarAdmin'
import AddProductHoook from '../../Hook/Products/add-product-hook'
import EditeProductHook from '../../Hook/Products/edite-product-hook'
import { useParams } from 'react-router-dom'

const EditeProduct = () => {

    const {id} = useParams()

    const [Name, Img, Price, Desc, Category, Ispress, Loading, onNameChange, onImgChange, onPriceChange, onDescChange, onCategoryChange, handelSubmit, DataCategory, OneProduct] = EditeProductHook(id)

  

    return (
        <div>
            <NavBarAdmin />
            <SideBarAdmin />

            <div className='container px-5 ' style={{ backgroundColor: "#eee", position: 'absolute', top: '6rem', right: '0', minHeight: '85vh', paddingTop: '1rem' }}>

                <form>
                    <div className='col-6 mb-5'>
                        <div className="d-flex justify-content-center mb-3">
                            <img src={Img}
                                className="rounded-5" alt="example placeholder" style={{ width: "200px" }} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-primary btn-rounded">
                                <label className="form-label text-white m-1" for="customFile2">Choose file</label>
                                <input onChange={onImgChange} type="file" className="form-control d-none" id="customFile2" />
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label" for="form6Example1"> Name </label>
                            <input value={Name} onChange={onNameChange} type="text" id="form6Example1" class="form-control " />
                        </div>
                        <div class="col">
                            <label class="form-label" for="form6Example2"> Price</label>
                            <input value={Price} onChange={onPriceChange} type="number" id="form6Example2" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="form6Example7"> Déscription </label>
                        <textarea value={Desc} onChange={onDescChange} class="form-control" id="form6Example7" rows="4"></textarea>
                    </div>

                    <div class="mb-3">
                        <label class="form-label" for="form6Example3"> Category </label>
                        <select value={Category} onChange={onCategoryChange} class="form-control">
                            {
                                DataCategory ? (
                                    DataCategory.map((item, index) =>
                                        <option key={index} value={item.name}> {item.name} </option>
                                    )
                                ) : null
                            }
                        </select>
                    </div>

                    <div class="col-3">
                        <button onClick={handelSubmit} type="submit" class="btn btn-primary btn-block mb-3"> Save </button>
                    </div>

                    {
                        Ispress ? Loading ? (<div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>) : null : null
                    }

                </form>

            </div>
        </div>
    )
}

export default EditeProduct