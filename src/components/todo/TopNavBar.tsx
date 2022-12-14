import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

interface Props {
  window?: () => Window
}

const drawerWidth = 240
const navItems = ['Home', 'Profile']

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})

function TopNavBar(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const handleNavigation = async (e) => {
    switch (e.target.innerText.toLowerCase()) {
      case 'home':
        navigate('/home')
        break
      case 'profile':
        navigate('/profile')
        break
    }
  }

  const drawer = (
    <Box className='' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        TODOS
      </Typography>
      <Divider />
      <List onClick={(e) => handleNavigation(e)}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <nav>
          <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component='nav'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontWeight: '800' } }}
            >
              TODOS
            </Typography>
            <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button onClick={(e) => handleNavigation(e)}  key={item} sx={{ color: '#ffffff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component='main' sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box>
      </ThemeProvider>
    </Box>
    </nav>

  )
}
export default TopNavBar
