import { createBrowserRouter } from 'react-router-dom'
import SigninPage from './pages/singin'
import SignUpPage from './pages/signup'
import Home from './pages/home'
export const router = createBrowserRouter([
    {
        path: '/signin',
        element: <SigninPage></SigninPage>
    },
    {
        path: '/signup',
        element: <SignUpPage></SignUpPage>
    },
    {
        path: '*',
        element: <Home></Home>
    }
])
