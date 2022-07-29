import { useContext } from 'react';
import alertContext from './alertContext'

export default function useAlertReducer(){
    return useContext(alertContext);
}