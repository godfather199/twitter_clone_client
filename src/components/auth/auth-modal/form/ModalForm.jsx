import {FormTextField} from '../../../'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import { login_Schema, register_Schema } from "../../../../utils/validation.schema"
import { useDispatch, useSelector } from 'react-redux'
import { thunk_Login } from '../../../../store/thunks/userThunk'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { reset_Success_State, set_Auth_Modal } from '../../../../store/slices/userSlice'



function ModalForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {auth_Modal_Type, is_Success, is_Loading} = useSelector(state => state.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      auth_Modal_Type === "Login Modal" ? login_Schema : register_Schema
    ),
  });


  // Reset Modal 


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


  const login_Submit = ({info, password}) => {
    dispatch(thunk_Login({ userInfo: info, userPassword: password }));

    reset()
  }


  const register_Submit = (values) => {
    console.log('Register: ', values)
  }



  return (
    <div className="">
      <form
        onSubmit={handleSubmit(
          auth_Modal_Type === "Login Modal" ? login_Submit : register_Submit
        )}
        className=""
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

        <button type="submit" className="">
          {auth_Modal_Type === 'Login Modal' ? "Login" : 'Sign up'}
        </button>
      </form>
    </div>
  );
}

export default ModalForm