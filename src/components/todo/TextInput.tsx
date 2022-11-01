import React, { useState, useEffect, useContext, FC, FormEvent, MouseEvent } from 'react'
import { useInput } from '@mui/base'
import { styled } from '@mui/system'
import { unstable_useForkRef as useForkRef } from '@mui/utils'
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
  border-radius: 12px;
  color: ${theme.palette.mode !== 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode !== 'dark' ? 'hsl(197, 11%, 12%)' : '#fff'};
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

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref)

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...inputProps} />
    </div>
  )
})

function TextInput(props: any) {
  const [input, setInput] = useState('')
  const handleInput = async (value: string) => {
    setInput(value)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setInput('')
    e.target[0].value = '' //reset input after submit
    props.getValues(input)
    props.addTodo()

  }

  return (

    <form  className='w-fit justify-around  mx-auto flex flex-row  gap-x-3 overflow-hidden' onSubmit={(e) => handleSubmit(e)}>
      <CustomInput
        onChange={(e) => handleInput(e.target.value)}
        aria-label='todo input'
        placeholder='Type something…'
        className='w-onehundred sm:w-[350px] md:w-[490px]  '
      />
      <AddButton />;
    </form>

  )
}

export default TextInput
