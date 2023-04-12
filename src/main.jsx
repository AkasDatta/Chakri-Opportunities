import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Featured from './components/Featured/Featured';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import Charts from './components/Charts/Charts';
import JobDetails from './components/JobDetails/JobDetails';
// import AppliedJobs from './components/AppliedJobs/AppliedJobs';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobDetails.json')
      },
      {
        path: '/category',
        element: <Category></Category>,
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>
      },
      // {
      //   path: '/appliedJobs',
      //   element: <AppliedJobs></AppliedJobs>
      // },
      {
        path: '/chart',
        element: <Charts></Charts>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path:'/featured',
        element: <Featured></Featured>
      }    
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
