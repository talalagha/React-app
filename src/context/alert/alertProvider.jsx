import React, { useEffect, useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
// import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertProvider = props => {
  const initialState  = [];

  const [alerts, dispatch] = useReducer(AlertReducer, initialState);

  // Add Alert
  const addAlert = ({id, type = "info", timeLimit = 10, title = "", text = "", link}) => {
    const alertID = id || (alerts[alerts.length - 1] ? alerts[alerts.length - 1].id + 1 : 1);

    dispatch({
      type: 'ADD_ALERT',
      payload: { id: alertID, type, timeLimit, title, text, link }
    });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
        payload: alertID
      });
    }, 1000 * timeLimit);
  };

  // Remove Alert
  const removeAlert = id => {
    dispatch({
      type: 'REMOVE_ALERT',
      payload: id
    });
  }

  return (
    <AlertContext.Provider
        value={
            { alerts, addAlert, removeAlert }
        }
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
