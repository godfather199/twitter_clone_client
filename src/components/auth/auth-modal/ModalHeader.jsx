import { useSelector } from "react-redux";

function ModalHeader() {
  const {auth_Modal_Type} = useSelector(state => state.user)
  
  return (
    <div className="">
      <div className="">
        <img
          src="https://img.freepik.com/free-vector/bird-icon_23-2147507196.jpg?t=st=1716088305~exp=1716091905~hmac=16ec2cb9b2c1ba24859ee58ff8a51c9afc228626dea0766e14cfc8b7e8aaa624&w=740"
          alt=""
          className="w-[3rem] h-[3rem] rounded-full"
        />
      </div>

      <div className="">
        <span className="">
          {auth_Modal_Type === "Login Modal"
            ? "Sign in to twitter"
            : "Sign up to twitter"}
        </span>
      </div>
    </div>
  );
}

export default ModalHeader