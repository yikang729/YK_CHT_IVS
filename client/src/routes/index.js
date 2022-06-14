import {Navigate} from 'react-router-dom'
import Home from '../pages/home'
import Signin from '../pages/signin'

// 路由表
const routerTable = [
    {
        path:'/signin',
        element: <Signin/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'*',
        element: <Navigate to="/signin"/>
    }
]

export default routerTable