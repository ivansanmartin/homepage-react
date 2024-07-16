import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './routes/Project'
import Blog from './routes/Blog.tsx'
import More from './routes/More.tsx'
import ErrorPage from './components/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Project />,
      },
      {
        path: "/projects",
        element: <Project />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/more",
        element: <More />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
