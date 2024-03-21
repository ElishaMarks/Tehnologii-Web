import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RoutesCustom, {PathEnum} from "./routes/RoutsEnum.tsx";


const router = createBrowserRouter([{
    path: PathEnum.Main,
    element: <App />,
    children: RoutesCustom.map((route) => {
        return {
            path: route.path,
            element: route.element,
            exact: route.exact
        }
    })
}])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />;
    </React.StrictMode>,
)