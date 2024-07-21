import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import "./index.css";
import { Provider } from "react-redux"
import myntraStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path : "/", element: <Home />},
      {
        path: "/Bag",
        element: <Bag/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
