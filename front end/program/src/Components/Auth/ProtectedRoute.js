import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({Auth , children, url}) => {
  
    if(Auth === false){
        return <Navigate to={url} replace />
    }

    return children ? children : <Outlet/>

}

export default ProtectedRoute