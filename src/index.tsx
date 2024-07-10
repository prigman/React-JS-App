import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import News from './pages/News'
import Contacts from './pages/Contacts'

const router = createBrowserRouter([
{
	path: "/",
	element: <Home />,
	errorElement: <h1>404</h1>
},
{
	path: "/about",
	element: <About />,
},
{
	path: "/services",
	element: <Services />,
},
{
	path: "/work",
	element: <Work />,
},
{
	path: "/news",
	element: <News />,
},
{
	path: "/contacts",
	element: <Contacts />,
}
]);

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);