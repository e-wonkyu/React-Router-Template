import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//CSS
import './index.css'

//Components
import {ErrorHandler} from "./components/ErrorHandler/ErrorHandler.jsx";
import {ThrowError} from "./components/ErrorHandler/ErrorTestComponents.jsx";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ThrowError/>,
            errorElement:<ErrorHandler/>
        },
        {}
    ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
