import React, { useState } from 'react'
import NavBarAdmin from '../../Components/Admin/NavBarAdmin'
import SideBarAdmin from '../../Components/Admin/SideBarAdmin'
import CardProductAdmin from '../../Components/Products/CardProductAdmin'
import GetAllProductAdminHook from '../../Hook/Products/get-allproduct-admin-hook'


const AllProductPage = () => {

  const [DataProduct, Loading] = GetAllProductAdminHook()


  return (
    <div>

      <NavBarAdmin/>
      <SideBarAdmin active={'Products'} />

      <div className='container' style={{ backgroundColor: "#eee", position: 'absolute', top: '6rem', right: '0', minHeight: '85vh', paddingTop: '1rem' }}>
        {
          Loading === false ? (
            DataProduct ? (
              DataProduct.map((item, index) =>
                <CardProductAdmin key={index} Product={item} />
              )
            ) : <h3 className='text-danger mx-5'>  There are no Products ^_^  </h3>
          ) : <div className="spinner-border mt-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>

        }
      </div>


    </div>
  )
}

export default AllProductPage