import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Home from "../../Pages/Home/Home/Home";
import Login from '../../Pages/Login/Login/Login'
import Register from "../../Pages/Register/Register/Register";
import Blog from "../../Pages/Blog/Blog/Blog";
import Footer from "../../Pages/Shared/Footer/Footer/Footer";
import Services from "../../Pages/Home/Services/Services";
import PrivateRoute from '../../Router/PrivateRoute/PrivateRoute'
import Profile from "../../Pages/Others/Profile/Profile";
import Review from "../../Pages/Review/Review";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import AddService from "../../Pages/AddService/AddService";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://learn-code-server-lovat.vercel.app/services/${params.id}`)

            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
                path:'/profile',
                element: <Profile></Profile>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/review',
                element: <PrivateRoute><Review></Review></PrivateRoute>

            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
           
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://learn-code-server-lovat.vercel.app/blog')

            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    },
    

])

export default router;
