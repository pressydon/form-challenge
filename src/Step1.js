
import { Typography } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Form from './components/Form';
import {Input} from './components/Input';
import MainContainer from './components/MainContainer';
import PrimaryButton from './components/PrimaryButton';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useData } from './components/DataContext';
const schema = yup.object().shape({
  firstName: yup
  .string()
  .matches(/^([^0-9]*)$/, 'First Name should not contain a number')
  .required('First Name is a required field'),
  lastName: yup
  .string()
  .matches(/^([^0-9]*)$/, 'Last Name should not contain a number')
  .required('Last Name is a required field'),
})

function Step1() {
  const {setValues, data} = useData()
 const {register, handleSubmit,  formState: { errors }} = useForm({
   defaultValues: {firstName: data.firstName, lastName:data.lastName},
   mode: 'onBlur',
  resolver:yupResolver(schema)
 });
 const navigate = useNavigate()

 const onSubmit =(data) =>{
    navigate('/step2');
    setValues(data)
 }

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
      🌈 Step 1
        </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
        {...register('firstName')} 
        name='firstName'
        type='text'
        label="First Name" 
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
        />
         <Input
        {...register('lastName')} 
        name='lastName'
        type='text'
        label="Last Name"
        error={!!errors.lastName}
        helperText={errors?.lastName?.message}
         />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}

export default Step1
