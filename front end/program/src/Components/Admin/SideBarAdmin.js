import React from 'react'
import '../../assets/css/Admin/SideBar.css'
import { Link } from 'react-router-dom'


const SideBarAdmin = () => {
    const active = "active"
    return (
        <div>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to='/admin/allProduct' >
                            <a
                                href="#"
                                className="list-group-item list-group-item-action py-2 my-3 ripple"
                                aria-current="true"
                            >
                                <i className="fa-brands fa-product-hunt me-3"></i>
                                <span> Products</span>
                            </a>
                        </Link>
                        <Link to='/admin/addProduct'>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action py-2 ripple"
                                aria-current="true"
                                
                            >
                                <i className="fa-solid fa-plus me-2" style={{marginLeft:'1.5rem'}}></i>
                                <span style={{fontSize:'.9rem'}} > Add Product </span>
                            </a>
                        </Link>
                        <Link to='/admin/allCategory'>
                            <a
                                href="#"
                                className={`list-group-item list-group-item-action py-2 my-3 ripple ${active}`}
                            >
                                <i className="fa-brands fa-product-hunt me-3"></i>
                                <span> Categories</span>
                            </a>
                        </Link>
                        <Link to='/admin/addCategory'>
                            <a
                                href="#"
                                className="list-group-item list-group-item-action py-2 ripple"
                                aria-current="true"
                                
                            >
                                <i className="fa-solid fa-plus me-2" style={{marginLeft:'1.5rem'}}></i>
                                <span style={{fontSize:'.9rem'}} > Add Category </span>
                            </a>
                        </Link>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action py-2 my-3 ripple"
                        ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></a
                        >

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideBarAdmin