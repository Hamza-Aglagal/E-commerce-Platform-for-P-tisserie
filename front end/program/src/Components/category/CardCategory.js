import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import DeleteCategoryHook from '../../Hook/Category/delete-category-hook'

const CardCategory = ({ category }) => {

    const [show, handleClose, handleShow, handelDelete] = DeleteCategoryHook()


    return (
        <div className="col">

            <Modal show={show} onHide={handleClose} style={{ zIndex: '10000' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete </Modal.Title>
                </Modal.Header>
                <Modal.Body>Confirm Category deletion</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handelDelete(category.id)}>
                        confirm
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="card">
                <img src={`http://127.0.0.1:8000/category/${category.img}`} className="card-img-top" alt="Hollywood Sign on The Hill" />
                <div className="card-body">
                    <h5 className="card-title"> {category.name} </h5>
                    <button onClick={handleShow} type="button" className="btn btn-danger flex-fill ms-1 "> Delete </button>
                </div>
            </div>
        </div>
    )
}

export default CardCategory