import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home'
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import About from './components/pages/About'

const router = createBrowserRouter([
{
	path: "/",
	element: <Home />,
	errorElement: <h1>404</h1>
},
{
	path: "/about",
	element: <About />,
}
]);

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);