import { useDispatch, useSelector } from 'react-redux';
import {ModalForm, ModalHeader, AuthenticationBtn} from '../../'
import { set_Auth_Modal, set_Auth_Modal_Persist } from '../../../store/slices/userSlice';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login_Schema, register_Schema } from '../../../utils/validation.schema';


function ModalContent() {
  const dispatch = useDispatch()
  
  const { auth_Modal_Type } = useSelector((state) => state.user);


  const form = useForm({
    resolver: yupResolver(
      auth_Modal_Type === "Login Modal" ? login_Schema : register_Schema
    ),
  });
  

  const handle_Navigate_To_Register = () => {
    dispatch(set_Auth_Modal_Persist("Register Modal"))
    form.reset()
  }


  const handle_Navigate_To_Login = () => {
    dispatch(set_Auth_Modal_Persist("Login Modal"))
    form.reset()
  }


  return (
    <div
      // style={{ border: "3px solid red" }}
      className={`flex flex-col gap-2 h-[37rem] overflow-y-scroll `}
    >
      {/* Modal header */}
      <ModalHeader />

      {/* Google oauth */}
      {/* <AuthenticationBtn text="Sign in with google" /> */}

      {/* <div className="border-2 border-black" /> */}
      {/* Form */}
      <ModalForm {...form} />

      {/* Footer text */}
      <div className="">
        {auth_Modal_Type === "Login Modal" ? (
          <span className="text-lg text-gray-500 font-semibold">
            Don't have an account?{" "}
            <span
              className=" cursor-pointer text-blue-400 hover:text-blue-300 ml-1"
              onClick={() => handle_Navigate_To_Register("Register Modal")}
            >
              Sign up
            </span>
          </span>
        ) : (
          <span className="text-lg text-gray-500 font-semibold">
            Have an account already?
            <span
              className=" cursor-pointer text-blue-400 hover:text-blue-300 ml-1"
              onClick={() => handle_Navigate_To_Login("Login Modal")}
            >
              Log in
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default ModalContent