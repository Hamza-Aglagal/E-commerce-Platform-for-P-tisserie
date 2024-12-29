import React, { useState } from 'react'
import './../../assets/css/Category/Subcategory.css'
import GetCategoryProductPageHook from '../../Hook/Category/get-category-productpage-hook'
import { useDispatch } from 'react-redux'
import { ProductOfCategory } from '../../Redux/Actions/ProductAction'
import { type } from '@testing-library/user-event/dist/type'
import Zoom from 'react-reveal/Zoom';



const Subcategory = () => {

  const dispatch = useDispatch()

  const [Data, Loading] = GetCategoryProductPageHook()

  const [OnClickSearch, setOnClickSearch] = useState(false)

  const style_1 = {
    width: '3rem', height: '3rem', borderRaduis: '50%'
  }

  return (
    // <div className='Subcategory'>





    <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">



      <div class="carousel-inner py-4">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">


              <div class="col-lg-12">
                <Zoom>
                  {
                    Loading === false ? (
                      Data ? (
                        Data.map((item, index) =>
                          <a key={index} className='btn' id='btn-category' onClick={() => dispatch(ProductOfCategory(item.name))} > {item.name} </a>
                        )
                      ) : <h3 className='text-danger'>  There are no categories ^_^  </h3>
                    ) : <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  }
                </Zoom>

                <Zoom top>
                  <a className='btn' id='btn-category' onClick={() => dispatch({ type: 'All' })} > All </a>
                </Zoom>

                {/* <div onClick={() => setOnClickSearch(prev => !prev)} style={{ width: OnClickSearch? '9rem' : '2.5rem', height: '2.5rem', borderRadius: '50%', border: 'red solid 1px', cursor: 'pointer' }} >
                  <div className="input-group" style={{ display: OnClickSearch ? 'block' : 'none' }}>
                    <div className="">
                      <input id="search-focus" type="search" className="form-control" />
                      <label className="form-label" htmlFor="form1">Search</label>
                    </div>
                    <button type="button" className="btn btn-primary">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div> */}

              </div>


            </div>
          </div>
        </div>



      </div>
    </div>


    // </div>
  )
}

export default Subcategory