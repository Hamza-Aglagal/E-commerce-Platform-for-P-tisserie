import React from 'react'
import NavBar from '../../Components/utility/NavBar'
import Subcategory from '../../Components/category/Subcategory'
import SecondCardProduct from '../../Components/Products/SecondCardProduct'
import '../../assets/css/Product/ProductsPage.css'
import Footer from '../../Components/utility/Footer'
import GetAllProductClientHook from '../../Hook/Products/get-all-product-user-hook'



const ProductsPage = () => {

  const [DataProductClient, ProductOfCategory, Loading] = GetAllProductClientHook()


  return (
    <div className='ProductsPage'>
      <NavBar width={'100%'} position={'fixed'} top={0} bg={'linear-gradient(to right, #222831 45%, #222831bd , #222831bd )'} />

      <h1 className='titre'> Our Menu </h1>
      <Subcategory />


        <div className='Product-container container'>

          {
            !Loading ?
              ProductOfCategory.length != 0 ?
                (ProductOfCategory.map((item, index) =>
                  <SecondCardProduct key={index} product={item} />
                )) :
                (DataProductClient.map((item, index) =>
                  <SecondCardProduct key={index} product={item} />
                )) :
              <div class="spinner-border" role="status" style={{ position: 'absolute', top: '70%', right: '49%' }}>
                <span class="sr-only">Loading...</span>
              </div>
          }

        </div>

      <div class="btn-box">
        <a >
          View More
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default ProductsPage 