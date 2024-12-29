import React from 'react'
import NavBarAdmin from '../../Components/Admin/NavBarAdmin'
import SideBarAdmin from '../../Components/Admin/SideBarAdmin'
import CardCategory from '../../Components/category/CardCategory'
import GetAllCategoryAdminHook from '../../Hook/Category/get-allcategory-admin-hook'


const CategoriesPage = () => {

    const [DataCategoryAdmin,Loading] = GetAllCategoryAdminHook()

    return (
        <div>
            <NavBarAdmin />
            <SideBarAdmin />

            <div className='container row row-cols-2 row-cols-md-4 g-6 ' style={{ backgroundColor: "#eee", position: 'absolute', top: '6rem', right: '0', minHeight: '85vh', paddingTop: '1rem' }}>

                {
                    Loading === false ? (
                        DataCategoryAdmin ? (
                            DataCategoryAdmin.map((item, index) =>
                                <CardCategory key={index} category={item} />
                            )
                        ) : <h3 className='text-danger'>  There are no categories ^_^  </h3>
                    ) : <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                }


            </div>
        </div>
    )
}

export default CategoriesPage