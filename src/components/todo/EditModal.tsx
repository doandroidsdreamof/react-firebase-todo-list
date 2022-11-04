import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'

import CloseIcon from '@mui/icons-material/Close'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import { TransitionProps } from '@mui/material/transitions'
import Typography from '@mui/material/Typography'

import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />
})

function EditModal(props: any) {
  const handleClose = () => {
    props.closeEditModal()
  }
  const auth = getAuth()
  const user = useContext(AuthContext)
  const [editTodo, setEditTodo] = useState<string>(props.singleTodo?.todo)

  useEffect(() => {
    setEditTodo(props.singleTodo?.todo)
  }, [props.singleTodo?.todo])

  const handleUpdate = async (e) => {
    setEditTodo(e.target.value)
  }

  const handleSubmit = async (e) => {
    props.observer()
    const taskDocRef = doc(db, 'Todo', props.singleTodo?.id)
    try {
      await updateDoc(taskDocRef, {
        todo:
        editTodo === '' ? await deleteDoc(doc(db, 'Todo', props.singleTodo?.id)) : editTodo,

      })
    } catch (err) {
      console.log(err)
    }
    props.closeEditModal()
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Dialog
          fullScreen
          open={props.openEdit}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
                Edit Todo
              </Typography>
              <Button onClick={(e) => handleSubmit(e)} variant='contained'>
                Save Changes
              </Button>
            </Toolbar>
          </AppBar>
          <Box className='h-screen '>
            <TextField
              multiline
              className=' w-full h-96'
              id='outlined-basic'
              variant='outlined'
              value={editTodo}
              onChange={handleUpdate}
            />
          </Box>
        </Dialog>
      </div>
    </ThemeProvider>
  )
}

export default EditModal
