import { Typography } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Form from './components/Form'
import { useData } from './components/DataContext'
import MainContainer from './components/MainContainer'
import PrimaryButton from './components/PrimaryButton'
import FileInput from './components/FileInput'


function Step3() {
  const navigate = useNavigate();
  const {data, setValues} = useData();

  const {control, handleSubmit} = useForm({
    defaultValues:{
      files: data.files
    }
  });

  const onSubmit =(data)=>{
    navigate('/step4')
    setValues(data)
  }

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
      🌈   step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
       <FileInput name="files" control={control} /> 
       <PrimaryButton>Next</PrimaryButton>
      </Form>
      
    </MainContainer>
  )
}

export default Step3
