import { useEffect, useState } from "react"
import { user_Authentication_Service } from "../services/userService"
import { Backdrop, CircularProgress } from "@mui/material"
import { Navigate } from "react-router-dom"



function ProtectedRoute({children}) {
  const [authenticationToken, setAuthenticationToken] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  // Verify user login status
  useEffect(() => {
    const fetch_Data = async () => {
        const {success} = await user_Authentication_Service()
        setAuthenticationToken(success)
        setIsLoading(false)
    }

    fetch_Data()
  }, [])


  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }


  if(authenticationToken) {
    return children
  }

  return <Navigate to = '/' />
}

export default ProtectedRoute