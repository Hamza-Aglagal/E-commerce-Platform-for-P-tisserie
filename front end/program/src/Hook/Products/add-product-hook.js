import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../Redux/Actions/ProductAction'
import { getAllCategory } from '../../Redux/Actions/categoryAction'
import Swal from 'sweetalert2'


const AddProductHoook = () => {

    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    // get data category 
    const DataCategory = useSelector(state => state.Categories.Category)
    // console.log('DataCategory',DataCategory)
   
    

    const dispatch = useDispatch()

    const [Img, setImg] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
    const [SelectedFile, setSelectedFile] = useState('')
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Desc, setDesc] = useState('')
    const [Category, setCategory] = useState('')

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
    const onPriceChange = (e) => {
        e.persist()
        setPrice(parseFloat(e.target.value))
    }
    const onDescChange = (e) => {
        e.persist()
        setDesc(e.target.value)
    }
    const onCategoryChange = (e) => {
        e.persist()
        setCategory(e.target.value)
    }


    const handelSubmit = async (e) => {
        e.preventDefault()
        
        // console.log({'img':SelectedFile,Name,Price,Desc,Category})


        const formData = new FormData()
        formData.append("name", Name)
        formData.append("price", Price)
        console.log('add_file :',SelectedFile)
        formData.append("img", SelectedFile)
        formData.append("desc", Desc)
        formData.append("category", Category)

        setLoading(true)
        setIspress(true)
        await dispatch(createProduct(formData))
        setLoading(false)

    }

    useEffect(() => {
        if (Loading === false) {
            setSelectedFile(null)
            setName('')
            setImg("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
            setPrice('')
            setDesc('')
            setCategory('')
            setLoading(true)
            Swal.fire({
                position: 'buttom-end',
                icon: 'success',
                title: 'Product has been added',
                showConfirmButton: false,
                timer: 1500
              })
            // console.log('is finish....')
            setTimeout(() => setIspress(false), 1000)
        }
    }, [Loading])


    return [Name, Img, Price, Desc, Category, Ispress, Loading, onNameChange, onImgChange, onPriceChange, onDescChange, onCategoryChange, handelSubmit,DataCategory ]

}

export default AddProductHoook