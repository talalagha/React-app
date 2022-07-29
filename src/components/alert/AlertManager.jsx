import React from 'react'
import Box from "@mui/material/Box";
import useAlertReducer from '../../context/alert/alertManager';
import AlertComponent from './AlertComponent';

function AlertManager() {

  const { alerts } = useAlertReducer();

  return (
    <div>
        <Box sx={{
                  height: '100vh',
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  padding: '1rem 2rem',
                }}>
          {
            alerts.map(alert => (
                <AlertComponent key={alert.id} alert={alert} />
            ))
          }
        </Box>
    </div>
  )
}

export default AlertManager