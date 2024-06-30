import {Explore, Bookmarks, LandingPage, Home, Profile, TrendingPosts} from '../pages'
import {Sidebar} from '../components'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProtectedRoute from './ProtectedRoute';


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
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/explore",
          element: (
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          ),
        },
        {
          path: "/explore/trending-posts/:id",
          element: (
            <ProtectedRoute>
              <TrendingPosts />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/:userId",
          element:(
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ) 
        },
        {
          path: "/bookmark",
          element:(
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          ) 
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