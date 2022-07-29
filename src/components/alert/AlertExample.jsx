import React from 'react'
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField } from "@mui/material";
import { useState } from "react";
import useAlertReducer from "../../context/alert/alertManager";


function AlertExample() {
    const {
        addAlert
    } = useAlertReducer();

    const [newAlert, setNewAlert] = useState({
        type: undefined,
        timeLimit: undefined,
        title: undefined,
        text: undefined,
        link: undefined
    })

    function changeType(e) {
        setNewAlert({
            ...newAlert,
            type: e.target.value
        })
    }

    function changeTimeLimit(e) {
        setNewAlert({
            ...newAlert,
            timeLimit: e.target.value
        })
    }

    function changeTitle(e) {
        setNewAlert({
            ...newAlert,
            title: e.target.value
        })
    }

    function changeText(e) {
        setNewAlert({
            ...newAlert,
            text: e.target.value
        })
    }

    function changeLink(e) {
        setNewAlert({
            ...newAlert,
            link: e.target.value || undefined
        })
    }

    function handlePushAlert() {
        addAlert({
            ...newAlert
        });
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {/* select color, input type radio */}
        <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup row defaultValue="info" onChange={changeType}>
                <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
                <FormControlLabel value="warning" control={<Radio color="warning" />} label="Warning" />
                <FormControlLabel value="info" control={<Radio color="info" />} label="Info" />
                <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
            </RadioGroup>
        </FormControl>

        {/* select time limit */}
        <TextField onChange={changeTimeLimit} type="number" label="Time Limit" variant="standard"
            InputProps={{ inputProps: { min: 1 } }} />
        <TextField onChange={changeTitle} type="text" label="Title" variant="standard" />
        <TextField onChange={changeText} type="text" label="Description" variant="standard" />
        <TextField onChange={changeLink} type="text" label="Link" variant="standard" />



        <Button sx={{mt: '1em'}} variant="contained" color="primary" onClick={handlePushAlert}>push alert</Button>
    </div>
  )
}

export default AlertExample