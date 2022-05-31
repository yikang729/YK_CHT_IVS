import {Navigate} from 'react-router-dom'
import Home from '../pages/home'
import Signin from '../pages/signin'

// 路由表
export default [
    {
        path:'/signin',
        element: <Signin/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/',
        element: <Navigate to="/signin"/>
    }
]