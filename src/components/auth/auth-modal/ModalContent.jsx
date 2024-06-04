import { useSelector } from 'react-redux';
import {ModalForm, ModalHeader, AuthenticationBtn} from '../../'


function ModalContent() {
  const { auth_Modal_Type } = useSelector((state) => state.user);


  return (
    <div className="">
      {/* Modal header */}
      <ModalHeader />

      {/* Google oauth */}
      <AuthenticationBtn text="Sign in with google" />

      <div className="border-2 border-black" />
      {/* Form */}
      <ModalForm />

      {/* Footer text */}
      <div className="">
        <span className="">
          {auth_Modal_Type === "Login Modal"
            ? `Don't have an account? Sign up`
            : `Have an account already? Log in`}
        </span>
      </div>
    </div>
  );
}

export default ModalContent