import { createBrowserRouter } from 'react-router-dom'
import SigninPage from './pages/singin'
import SignUpPage from './pages/signup'
import Home from './pages/home'
import Parent from './pages/parent'
import Children from './pages/parent/children'
import Sibling from './pages/parent/children/sibbling'
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
        path: '/parent',
        element: <Parent></Parent>,
        children: [
            {
                path: "children",
                element: <Children></Children>,
                children: [
                    {
                        path: "sibling",
                        element: <Sibling></Sibling>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Home></Home>
    }
])
