import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../Redux/Actions/AuthAction'
import { ShowCart } from '../../Redux/Actions/CartAction'
import { NewOrder } from '../../Redux/Actions/OrderAction'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const CheckoutHook = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    // get dat user in localStorage 
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))
    // console.log('user : ', userData)
    const [TotalPrice, setTotalPrice] = useState(localStorage.getItem('TotalPrice'))
    const [Delivery, setDelivery] = useState(localStorage.getItem('Delivery'))
    const [adresse, setadresse] = useState('')

    useEffect(() => {
        if (userData.zipcode && userData.city && userData.street && userData.BuildingNum) {
            setadresse(userData.zipcode + ' / ' + userData.city + ' / ' + userData.street + ' / ' + userData.BuildingNum)
        }
    }, [])



    useEffect(() => {
        if (Delivery === 'Standard') {
            setTotalPrice(parseFloat(TotalPrice) + 5)
        }
    }, [Delivery])


    const [OnClickChekbox, setOnClickChekbox] = useState(false)
    const [Errors, setErrors] = useState()
    const [firstname, setfirstname] = useState(userData.firstname)
    const [lastname, setlastname] = useState(userData.lastname)
    const [phone, setphone] = useState(userData.phone)
    // const [adresse, setadresse] = useState()
    // const [street, setstreet] = useState()
    // const [BuildingNum, setBuildingNum] = useState()
    // const [city, setcity] = useState()
    // const [zipcode, setzipcode] = useState()
    const [email, setemail] = useState(userData.email)


    const [Loading, setLoading] = useState(true)


    const onFirstNameChange = (e) => {
        e.persist()
        setfirstname(e.target.value)
    }
    const onLastNameChange = (e) => {
        e.persist()
        setlastname(e.target.value)
    }
    const onPhoneChange = (e) => {
        e.persist()
        setphone(e.target.value)
    }
    const onEmailChange = (e) => {
        e.persist()
        setemail(e.target.value)
    }
    const onAdresseChange = (e) => {
        e.persist()
        setadresse(e.target.value)
    }

    const Validation = () => {
        let Info = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            adresse: "",
        }
        if (firstname) {
            Info.firstname = firstname
        }
        if (lastname) {
            Info.lastname = lastname
        }
        if (phone) {
            Info.phone = phone
        }
        if (adresse) {
            Info.adresse = adresse
        }
        if (email) {
            Info.email = email
        }
        return Info
    }

    const ValidationErr = () => {
        var phoneRegex = /^\d{10}$/;
        if (!phone) {
            // console.log(" form phone is required")
            Swal.fire({ title: ' form phone is required',  icon: 'error', confirmButtonText: 'Back' })
            return false
        } else if (!phoneRegex.test(phone)) {
            // console.log("Please enter a valid phone number");
            Swal.fire({ title: 'Please enter a valid phone numbe',  icon: 'error', confirmButtonText: 'Back' })
            return false;
        }

        if (!adresse.includes("/")) {
            // console.log(" form adresse is required")
            Swal.fire({ title: ' form adresse is required',  icon: 'error', confirmButtonText: 'Back' })
            return false
        } else {
            return true
        }
    }


    // on Get Info Cart Client in database 
    useEffect(() => {
        if (userData) {
            // Add to cart  handel 
            const ShowCartHandel = async () => {
                setLoading(true)

                await dispatch(ShowCart({
                    "client_id": userData.id
                }))

                setLoading(false)

            }
            ShowCartHandel()
        }
    }, [userData])

    //  get Info cart 
    const Cart = useSelector(state => state.CartRed.ShowCart)
    // console.log('Cart :', Cart ? Cart.cart : null)


    //  get Info order 
    const Order = useSelector(state => state.OrderRed.NewOrder)
    console.log('Order :', Order ? Order : null)



    const handelSubmit = async (e) => {
        e.preventDefault()

        if (ValidationErr()) {
            const ClietnIfo = await Validation()
            setLoading(true)
            await dispatch(updateUser(ClietnIfo, userData.id))

            const data = {
                'user_id': userData.id,
                'firstname': userData.firstname,
                'lastname': userData.lastname,
                'phone': phone,
                'email': userData.email,
                'adress': adresse,
                'payment_mode': OnClickChekbox ? 'visa' : 'cash'
            }


            if (Cart) {
                if (Cart.cart.length === 0) {
                    Swal.fire({ title: 'your cart is vide !!!', text: 'Add product To Cart', icon: 'error', confirmButtonText: 'Back' })
                    // console.log('your cart is vide !!!')
                }

                if (phone && adresse) {
                    if (Cart.cart.length != 0 && OnClickChekbox === false) {
                        // create order cash on delivery
                        dispatch(NewOrder(data))
                        // console.log("test________:", data)
                    }

                    if (Cart.cart.length != 0 && OnClickChekbox === true) {
                        // create order visa
                        console.log("test________111")
                    }
                }
            }

            setLoading(false)

        }

    }


    useEffect(() => {
        if(Order){
            if(Order.message=== 'order has been added'){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your order is in process',
                    showConfirmButton: false,
                    timer: 1500
                  })
                // console.log('thank you for order')
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            }
        }
    }, [Order])


    // get Info User Updated 
    const UserInfoUpdated = useSelector(state => state.AuthRed.UpdateClient)
    // console.log('UserInfoUpdated', UserInfoUpdated)


    return [userData, TotalPrice, firstname, lastname, phone, adresse, email, Loading, Errors, setOnClickChekbox, OnClickChekbox,
        onFirstNameChange, onLastNameChange, onPhoneChange, onEmailChange, onAdresseChange, handelSubmit
    ]
}

export default CheckoutHook