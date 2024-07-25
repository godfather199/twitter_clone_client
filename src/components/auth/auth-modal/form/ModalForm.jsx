import {FormTextField} from '../../../'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import { login_Schema, register_Schema } from "../../../../utils/validation.schema"
import { useDispatch, useSelector } from 'react-redux'
import { thunk_Login, thunk_Register } from '../../../../store/thunks/userThunk'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { reset_Is_Success_Register, reset_Success_State, set_Auth_Modal, set_Auth_Modal_Persist } from '../../../../store/slices/userSlice'
import { CircularProgress } from '@mui/material'



function ModalForm({register, handleSubmit, formState: {errors}, reset}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
// console.log('Form: ', form)

  const { auth_Modal_Type, is_Success, is_Loading, is_Success_Register } =
    useSelector((state) => state.user);


  // Post successfull login
  useEffect(() => {
    if(is_Success) {
      setTimeout(() => {
        dispatch(reset_Success_State())
        navigate('/home')
      }, 2100);
    }
  }, [is_Success])  


  // Post successfull register
  useEffect(() => {
    if(is_Success_Register) {
      setTimeout(() => {
        reset()
        dispatch(reset_Is_Success_Register())
        dispatch(set_Auth_Modal_Persist("Login Modal"))

      }, 2100)
    }

  }, [is_Success_Register])


  const login_Submit = ({info, password}) => {
    // dispatch(thunk_Login({ userInfo: 'batman@gmail.com', userPassword: batman }));
    dispatch(thunk_Login({ userInfo: info, userPassword: password }));

    reset()
  }


  const register_Submit = ({ name, username, email, password }) => {
    dispatch(thunk_Register({ name, username, email, password }));

  };



  return (
    <div className="">
      <form
        // style={{ border: "3px solid purple" }}
        onSubmit={handleSubmit(
          auth_Modal_Type === "Login Modal" ? login_Submit : register_Submit
        )}
        className="flex flex-col gap-4 p-4 "
        autoComplete="off"
      >
        {auth_Modal_Type === "Register Modal" && (
          <FormTextField
            placeholder="Enter Name"
            type="text"
            register={register}
            label="name"
            error={errors.name?.message}
          />
        )}

        {auth_Modal_Type === "Register Modal" && (
          <FormTextField
            placeholder="Enter Username"
            type="text"
            register={register}
            label="username"
            error={errors.username?.message}
          />
        )}

        <FormTextField
          placeholder={
            auth_Modal_Type === "Login Modal"
              ? "Enter username or email"
              : "Enter email"
          }
          type="text"
          register={register}
          label={auth_Modal_Type === "Login Modal" ? "info" : "email"}
          error={
            auth_Modal_Type === "Login Modal"
              ? errors.info?.message
              : errors.email?.message
          }
        />

        <FormTextField
          placeholder="Enter password"
          type="password"
          register={register}
          label="password"
          error={errors.password?.message}
        />

        <button
          type="submit"
          disabled={is_Loading}
          className={`text-white bg-blue-400 font-bold text-xl  p-4 rounded-[1.5rem] opacity-100 hover:opacity-90 shadow-lg ${
            is_Loading ? " cursor-not-allowed" : " cursor-pointer"
          }`}
        >
          {is_Loading ? (
            <CircularProgress size={35} style={{ color: "white" }} />
          ) : (
            <>{auth_Modal_Type === "Login Modal" ? "Login" : "Sign up"}</>
          )}
        </button>
      </form>
    </div>
  );
}

export default ModalForm






