import axios from "axios"
import Routes from "./routes/Routes"
import { Toaster } from "react-hot-toast"


export const backend_Url = import.meta.env.VITE_BACKEND_URL


// Axios setup
axios.defaults.baseURL = backend_Url
axios.defaults.withCredentials = true



function App() {
  return (
    <div className="">
      <Toaster />
      <Routes />
    </div>
  )
}

export default App