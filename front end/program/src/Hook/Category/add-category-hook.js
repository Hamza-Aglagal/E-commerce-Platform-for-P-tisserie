import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../Redux/Actions/categoryAction'
import Swal from 'sweetalert2'


const AddCategoryHook = () => {

    const dispatch = useDispatch()


    const [Img, setImg] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
    const [Name, setName] = useState('')
    const [SelectedFile, setSelectedFile] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [Ispress, setIspress] = useState(false)

    const onImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const onNameChange = (e) => {
        e.persist()
        setName(e.target.value)
    }

    // save  data in database 
    const handelSubmit = async (e) => {
        e.preventDefault()

        if (!Name || !SelectedFile) {
            Swal.fire({ title: ' form is vide', icon: 'error', confirmButtonText: 'Back' })
            // console.log('form is vide')

            return
        }

        const formData = new FormData()
        formData.append("name", Name)
        formData.append("img", SelectedFile)

        setLoading(true)
        setIspress(true)
        await dispatch(createCategory(formData))
        setLoading(false)

    }
    useEffect(() => {
        if (Loading === false) {
            setSelectedFile(null)
            setName('')
            setImg("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
            setLoading(true)
            // console.log('is finish....')

            Swal.fire({
                position: 'buttom-end',
                icon: 'success',
                title: 'Category has been added',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => setIspress(false), 1000)
        }
    }, [Loading])

    return [Name, Img, Loading, Ispress, onImgChange, handelSubmit, onNameChange]

}

export default AddCategoryHook