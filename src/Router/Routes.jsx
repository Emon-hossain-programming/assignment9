import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home"
import register from "../Pages/register";
import SignUp from "../Pages/SignUp";
import ServiceDetails from "../Pages/ServiceDetails";
import MyProfile from "../Pages/MyProfile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Services from "../Pages/Services";



export const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayOut,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/cats.json')
            },
            {
        path:'/register',
        Component:register
    },
    {
       path:'/services',
       element:<Services></Services>,
       loader:()=>fetch('/cats.json')
    },
    {
        path:'/login',
        element:<SignUp></SignUp>
    },
    {
        path:'/service/:id',
        element:<PrivateRoutes>
            <ServiceDetails></ServiceDetails>
        </PrivateRoutes>,
        loader:()=>fetch('/cats.json')
    },
    {
        path:'/profile',
        Component:MyProfile
    }
   
        ]
    },
    
    
])