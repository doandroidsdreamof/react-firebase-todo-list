import React, { FC,useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack'

type props = {
  alertBox: boolean;

}
function LoginAlert ({alertBox}: props ) {
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        setOpen(alertBox)

    },[alertBox])

  return (

<div className='absolute z-50 right-3 top-2 w-64'>
    
<Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          login is unsuccessful!
        </Alert>
      </Collapse>

    </Box>
</div>
    
    

  );
}


export default LoginAlert