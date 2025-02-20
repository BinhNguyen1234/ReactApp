import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { router } from './routes'
import "./global.css"

export default function App(){
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}



