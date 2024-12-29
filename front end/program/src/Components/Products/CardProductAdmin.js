import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import DeleteProductHook from '../../Hook/Products/delete-product-hook'
import { Link } from 'react-router-dom'


const CardProductAdmin = ({ Product }) => {

    const [show, handleClose, handleShow, handelDelete] = DeleteProductHook()

    return (
        <div>

            <Modal show={show} onHide={handleClose} style={{ zIndex: '10000' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete </Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirm product deletion</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handelDelete(Product.id)}>
                        confirm
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="row justify-content-center mb-3">
                <div className="col-md-12 col-xl-10">
                    <div className="card shadow-0 border rounded-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                        <img src={`http://127.0.0.1:8000/products/${Product.img}`}
                                            className="w-100" />
                                        <a href="#!">
                                            <div className="hover-overlay">
                                                <div className="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15);" }}></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-evenly">
                                    <h5> {Product.name} </h5>

                                    <div className="mt-1 mb-0 text-muted small">
                                        <span> {Product.category} </span>

                                    </div>

                                    <p className="text-truncate mb-4 mb-md-0">
                                        {Product.desc}
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <h4 className="mb-1 me-1">$ {Product.price} </h4>
                                    </div>
                                    <div className="d-flex flex-column mt-4">
                                        <Link to={`/admin/editeProduct/${Product.id}`} className="btn btn-success btn-sm">
                                            <button className="btn btn-success btn-sm" type="button">Update Product</button>
                                        </Link>
                                        <button onClick={handleShow} className="btn btn-outline-danger btn-sm mt-2" type="button">
                                            Remove Product
                                        </button>
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

export default CardProductAdmin