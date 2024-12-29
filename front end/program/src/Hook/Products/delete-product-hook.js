import React , { useEffect, useState } from 'react'
import { deleteProduct } from '../../Redux/Actions/ProductAction';
import { useDispatch } from 'react-redux';


const DeleteProductHook = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handelDelete = async (id) => {
        await dispatch(deleteProduct(id))
        setShow(false)
        window.location.reload()
    }

    return [show,handleClose,handleShow,handelDelete]

}

export default DeleteProductHook