import React, { useState, useEffect, FC } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

 function ValidEmailAddress() {


  return (
    <div className='absolute z-50 right-3 top-2 w-64'>

    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Warning</AlertTitle>
        This email address is — <strong>valid</strong>
      </Alert>
    </Stack>
    </div>
  );
}


export default ValidEmailAddress