import React from 'react'
import { Alert, AlertTitle, Link } from "@mui/material";

function AlertComponent({alert}) {
  return (
    <Link href={alert.link} underline="none">
      <Alert severity={alert.type} sx={{marginBottom: '1em'}}>
          <AlertTitle>{alert.title}</AlertTitle>
          {alert.text}
      </Alert>
    </Link>
  )
}

export default AlertComponent