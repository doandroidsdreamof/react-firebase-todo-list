import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import EditButton from '../todo/EditButton'
import DeleteButton from '../todo/DeleteButton'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

function TodoListBlocks({ children }) {
  return (
    <Stack className='lg:w-eighty w-onehundred flex flex-row ' spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position='static' color='primary' enableColorOnDark></AppBar>
        <AppBar position='static' color='primary'>
          {children}
          <div className='flex '>
            <EditButton />
            <DeleteButton />
          </div>
        </AppBar>
      </ThemeProvider>
    </Stack>
  )
}

export default TodoListBlocks
