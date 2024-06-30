import { useDispatch } from 'react-redux';
import {AuthenticationBtn, AuthModal, TwitterLogo} from '../../components'
import { on_Mount_Auth_Modal, set_Auth_Modal } from '../../store/slices/userSlice';
import { useEffect } from 'react';



function LandingPage() {
  const dispatch = useDispatch()


  // Set modal state to 'false' on page enter
  useEffect(() => {
    dispatch(on_Mount_Auth_Modal())
  }, [])


  return (
    <div
      style={{ border: "3px solid red" }}
      className="w-[80rem] h-[39.8rem] flex items-center justify-around"
    >
      {/* Twitter logo */}
      {/* <div className="">
        <img
          src="https://img.freepik.com/free-vector/bird-icon_23-2147507196.jpg?t=st=1716088305~exp=1716091905~hmac=16ec2cb9b2c1ba24859ee58ff8a51c9afc228626dea0766e14cfc8b7e8aaa624&w=740"
          alt=""
          className="w-[20rem] h-[20rem] rounded-full"
        />
      </div> */}
      <TwitterLogo width = {20} height = {20} />

      {/* Authentication options */}
      <div className="">
        {/* Header Text */}
        <div className="">
          <span className="">Happening Now</span>
          <span className="">Join today.</span>
        </div>

        {/* Google o-auth */}
        <AuthenticationBtn
          text="Sign up with Google"
          onclick={() => console.log("Login with google")}
        />

        {/* Seprator */}
        <div className="border-2 border-black" />

        {/* Sign up button */}
        <AuthenticationBtn
          text="Sign up"
          onclick={() => dispatch(set_Auth_Modal('Register Modal'))}
        />

        {/* Sign in button */}
        <div className="">
          <span className="">Already have an account?</span>
          <AuthenticationBtn
            text="Sign in"
            onclick={() => dispatch(set_Auth_Modal('Login Modal'))}
          />
        </div>
      </div>

      {/* Sign-up/Login modal */}
      <AuthModal />
    </div>
  );
}

export default LandingPage