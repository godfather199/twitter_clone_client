import { useDispatch } from 'react-redux';
import {AuthenticationBtn, AuthModal, TwitterLogo} from '../../components'
import { on_Mount_Auth_Modal, set_Auth_Modal } from '../../store/slices/userSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast';



function LandingPage() {
  const dispatch = useDispatch()


  // Set modal state to 'false' on page enter
  useEffect(() => {
    dispatch(on_Mount_Auth_Modal())
  }, [])



  const handle_Open_Modal = (content) => {
    if(window.innerWidth < 641) {
      return toast.error('Resize the window to Register or Login', {
        duration: 1500,
        position: 'bottom-center'
      })
    }
    
    dispatch(set_Auth_Modal(content))
  }


  return (
    <div
      style={{
        border: "3px solid red",
        backgroundImage: `url('https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
      className="w-full h-[36.2rem] flex flex-col md:flex-row gap-7 md:gap-0 p-5 md:p-0 items-center justify-around   bg-cover bg-center min-h-screen "
    >
      {/* Twitter logo */}
      <div
        style={{ border: "3px solid green" }}
        className="mx-0 md:ml-[5rem] bg-white rounded-full shadow-lg"
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/06/22/14/23/twitter-2430933_640.png"
          className={` w-[5rem] h-[5rem] md:w-[12rem] md:h-[12rem] lg:w-[20rem] lg:h-[20rem]  rounded-full shadow-lg`}
        />
      </div>

      {/* Authentication options */}
      <div
        // style={{ border: "3px solid purple" }}
        className="w-[75%] md:w-[45%] h-full md:h-[25rem] ml-0 md:ml-[5rem] flex flex-col gap-[2.5rem] md:gap-10  p-6 rounded-lg"
      >
        {/* Header Text */}
        <div
          // style={{ border: "3px solid green" }}
          className="flex flex-col gap-3 md:gap-7"
        >
          <span className=" text-4xl md:text-6xl font-serif font-bold text-blue-400">
            Happening Now
          </span>
          <span className="text-4xl text-blue-400 font-serif font-bold">
            Join today.
          </span>
        </div>

        {/* Google o-auth */}
        {/* <AuthenticationBtn
          text="Sign up with Google"
          onclick={() => console.log("Login with google")}
        /> */}

        {/* Seprator */}
        {/* <div className="border-2 border-black" /> */}

        {/* Sign up button */}
        <AuthenticationBtn
          text="Create Account"
          onclick={() => handle_Open_Modal("Register Modal")}
          classname={`bg-blue-400 text-white font-bold text-xl w-[19rem] p-3 rounded-[1.5rem]  opacity-100 hover:opacity-90`}
        />

        {/* Sign in button */}
        <div className="flex flex-col gap-3 md:gap-5">
          <span className="text-xl font-serif font-bold text-blue-400">
            Already have an account?
          </span>

          <AuthenticationBtn
            text="Sign in"
            onclick={() => handle_Open_Modal("Login Modal")}
            classname={`border-2 border-blue-400 text-blue-400 font-bold text-xl w-[19rem] p-3 rounded-[1.5rem] opacity-100 hover:opacity-90`}
          />
        </div>
      </div>

      {/* Sign-up/Login modal */}
      <AuthModal />
    </div>
  );
}

export default LandingPage