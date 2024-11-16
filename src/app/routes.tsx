import { createBrowserRouter } from 'react-router-dom'
import SigninPage from './pages/singin'
import SignUpPage from './pages/signup'
export const router = createBrowserRouter([
    {
        path: '/signin',
        element: <SigninPage></SigninPage>
    },
    {
        path: '/signup',
        element: <SignUpPage></SignUpPage>
    }
])
