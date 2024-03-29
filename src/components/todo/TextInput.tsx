import React, { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { addDoc, collection,Timestamp } from 'firebase/firestore'

import { useInput } from '@mui/base'
import { styled } from '@mui/system'
import { unstable_useForkRef as useForkRef } from '@mui/utils'

import { db } from '../../firebase'

import AddButton from './AddButton'

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
}

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
}

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 10px;
  color: ${theme.palette.mode !== 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode !== 'dark' ? 'hsl(0, 0%, 15%)' : '#fff'};
  border: 1px solid ${theme.palette.mode !== 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode !== 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 1px solid ${theme.palette.mode !== 'dark' ? blue[500] : blue[200]};
  }
`,
)

const CustomInput = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { getRootProps, getInputProps } = useInput(props)

  const inputProps = getInputProps()



  inputProps.ref = useForkRef(inputProps.ref, ref)

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...inputProps} />
    </div>
  )
})

function TextInput(props: any) {
  const [input, setInput] = useState('')
  const auth = getAuth();
  const user = auth.currentUser;

  const handleInput = async (value: string) => {
    setInput(value)
  }

  async function addTodo() {
    if (input === '') {
      return
    }
    try {
      const docRef = await addDoc(collection(db, 'Todo'), {
        todo: input,
        completed: false,
        date: new Date().toLocaleString(),
        createdAt: Timestamp.fromDate(new Date()),
        owner: user?.uid,
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (input === '') {
      return
    }
    setInput('')
    e.target[0].value = '' //reset input after submit
    addTodo()
    props.logic()
  }

  return (
    <form
      className='   justify-center  mx-auto flex flex-row   gap-x-2  overflow-hidden'
      onSubmit={(e) => handleSubmit(e)}
    >
      <CustomInput
        onChange={(e) => setInput(e.target.value)}
        aria-label='todo input'
        placeholder='Type something…'
        className='w-[320px] lg:w-[420px] ml-2'
      />
      <AddButton />
    </form>
  )
}

export default TextInput
