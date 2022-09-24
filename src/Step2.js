import { Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useData } from './components/DataContext'
import Form from './components/Form'
import { Input } from './components/Input'
import MainContainer from './components/MainContainer'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import PrimaryButton from './components/PrimaryButton';
import {parsePhoneNumberFromString} from 'libphonenumber-js';

const normalizePhoneNumber  =(value)=>{
  const phoneNumber = parsePhoneNumberFromString(value);
  if(!phoneNumber){
    return value
  }
  return phoneNumber.formatInternational()
}

const schema = yup.object().shape({
  email:yup
  .string()
  .email("Email should have the correct format")
  .required("Email is a required field")
})

function Step2() {
  const {data, setValues} =     useData();
  const naviage = useNavigate();
  const {register, handleSubmit, watch,  formState: { errors }} = useForm({
    defaultValues:{
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)

  })

  const hasPhone = watch("hasPhone");

  const onSubmit = (data)=>{
    naviage('/step3');
    setValues(data)
  }
  return (
    <MainContainer>
      <Typography>
      🌈  step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          {...register('email')}  
          type='email'
           label='Email'
            name='email'
             required
             error={!!errors.email}
             helperText={errors?.email?.message} />
        <FormControlLabel 
        defaultValue={data.hasPhone}
        defaultChecked={data.hasPhone}
        color='primary'
        {...register('hasPhone')}
        name='hasPhone'
        control={<Checkbox />} 
        label='Do you have a phone number' />
        {
          hasPhone && <Input 
          {...register('hasPhone')}
           id='phoneNumber'
            type='tel'
             label='Phone Number'
             onChange={
               (e)=> {
                 e.target.value = normalizePhoneNumber(e.target.value)
               }
             } />
        }

        <PrimaryButton>Next</PrimaryButton>
      </Form>
      
    </MainContainer>
  )
}

export default Step2
