import React, { useState } from 'react'
import { deleteCategory } from '../../Redux/Actions/categoryAction';
import { useDispatch } from 'react-redux';


const DeleteCategoryHook = () => {

  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handelDelete = async (id) => {
    await dispatch(deleteCategory(id))
    setShow(false)
    window.location.reload()
  }

  return [show, handleClose, handleShow, handelDelete]

}

export default DeleteCategoryHook