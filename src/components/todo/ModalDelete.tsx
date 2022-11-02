import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

function ModalDelete(props: any) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    props.closeModal(true)
  }

  const handleClose = () => {
     props.closeModal(false)
  }

  return (
    <div className=''>
      <Dialog
        className=''
        fullScreen={fullScreen}
        open={props.open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle className='rounded-sm' id='responsive-dialog-title'>{"Do you really want to delete the todo?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
    
      
      </Dialog>
    </div>
  )
}

export default ModalDelete
