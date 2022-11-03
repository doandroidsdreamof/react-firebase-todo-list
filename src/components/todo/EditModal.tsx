import * as React from 'react'
import { useContext,useEffect,useState } from 'react'
import { getAuth } from 'firebase/auth'
import { deleteDoc,doc, updateDoc } from 'firebase/firestore'

import CloseIcon from '@mui/icons-material/Close'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
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
  const [editTodo,setEditTodo] = useState<string>('')


  useEffect(()=>{
setEditTodo(props.singleTodo?.todo)
  },[])

  const handleUpdate = async (e) => {
    props.observer()
    console.log('🚀 ~ file: EditModal.tsx ~ line 52 ~ handleUpdate ~ editTodo', editTodo)
    setEditTodo(e.target.value)
    const taskDocRef = doc(db, 'Todo', props.singleTodo?.id)
    try {
      await updateDoc(taskDocRef, {
        todo: editTodo.length === 0 ?  await deleteDoc(doc(db, 'Todo', props.singleTodo?.id)) : editTodo,
      })
    } catch (err) {
      console.log(err)
    }
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
