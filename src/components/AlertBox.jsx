import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertBox(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
  {props.alert && <Alert severity={props.alert.type}><strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}</Alert>}
          
    </Stack>
       
    )
}

export default AlertBox;