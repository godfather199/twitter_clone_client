import {Explore, Bookmarks, LandingPage, Home, Profile, TrendingPosts} from '../pages'
import {Sidebar} from '../components'
import { RouterProvider, createBrowserRouter } from "react-router-dom"



function Routes() {
  const router = createBrowserRouter([
    {
      element: <Sidebar />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/explore/trending-posts/:id",
          element: <TrendingPosts />,
        },
        {
          path: "/profile/:userId",
          element: <Profile />,
        },
        {
          path: "/bookmark",
          element: <Bookmarks />,
        },
      ],
    },
  ]);


  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Routes