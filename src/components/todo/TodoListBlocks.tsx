import * as React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import DeleteButton from '../todo/DeleteButton'
import EditButton from '../todo/EditButton'

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
    <Stack className='lg:w-eighty w-onehundred ' spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position='static' color='primary' enableColorOnDark></AppBar>
        <AppBar className=' rounded-lg ' position='static' color='primary'>
          <div className='flex flex-row gap-x-1 p-2'>{children}</div>
        </AppBar>
      </ThemeProvider>
    </Stack>
  )
}

export default TodoListBlocks
