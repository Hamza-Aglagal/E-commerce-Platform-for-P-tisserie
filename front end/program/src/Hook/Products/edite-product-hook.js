import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, updateProduct } from '../../Redux/Actions/ProductAction'
import { getAllCategory } from '../../Redux/Actions/categoryAction'




const EditeProductHook = (id) => {
    useEffect(() => {
        const run = async () => {
            await dispatch(getOneProduct(id))
            await dispatch(getAllCategory())
        }
        run()
    }, [])

    // get data category 
    const DataCategory = useSelector(state => state.Categories.Category)

    // get OneProduct 
    const OneProduct = useSelector(state => state.ProductsRed.OneProduct)


    const dispatch = useDispatch()

    const [Img, setImg] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
    const [SelectedFile, setSelectedFile] = useState('')
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Desc, setDesc] = useState('')
    const [Category, setCategory] = useState('')

    // const [UrlConvert, setUrlConvert] = useState()
    // const [Booleen, setBooleen] = useState(false)

    const [Loading, setLoading] = useState(true)
    const [Ispress, setIspress] = useState(false)


    useEffect(() => {
        setImg(`http://127.0.0.1:8000/products/${OneProduct.img}`)
        setName(OneProduct.name)
        setPrice(OneProduct.price)
        setDesc(OneProduct.desc)
        setCategory(OneProduct.category)
        setSelectedFile(OneProduct.img)
    }, [OneProduct])

    // Function to convert URL to File
    // async function convertUrlToFile(url) {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.blob();
    //         const filename = url.substring(url.lastIndexOf('/') + 1);

    //         // console.log('---$$$$$',new File([data], filename))
    //         return new File([data], filename)
    //         // setUrlConvert(new File([data], filename))

    //     } catch (error) {
    //         console.error('Error converting URL to File:', error);
    //         return null;
    //     }
    // }



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
        // console.log('---------------', Name,'---------------', Price,'---------------',Desc,'---------------',Category )


        const formData = new FormData()
        formData.append("name", Name)
        formData.append("price", Price)

        // convert urt to file
        // async function urlToFile(url) {
        //     const response = await fetch(url);
        //     const filename = url.substring(url.lastIndexOf('/') + 1);
        //     const mimeType = 'image/png';
        //     const blob = await response.blob();
        //     return new File([blob], filename, { type: mimeType });
        // }

        // const file = await urlToFile(SelectedFile);
        // console.log("file :",file)
        // End convert urt to file

        formData.append("img", SelectedFile)
        formData.append("desc", Desc)
        formData.append("category", Category)

        setLoading(true)
        setIspress(true)
        await dispatch(updateProduct(formData, id))
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
            console.log('is finish....')
            setTimeout(() => setIspress(false), 1000)
        }
    }, [Loading])


    return [Name, Img, Price, Desc, Category, Ispress, Loading, onNameChange, onImgChange, onPriceChange, onDescChange, onCategoryChange, handelSubmit, DataCategory, OneProduct]


}

export default EditeProductHook