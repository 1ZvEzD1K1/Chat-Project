import axios from "axios";
import { REGISTER_ERROR, REGISTER_STARTED, REGISTER_SUCCESS } from "../types";

export const sendReg = (data: any) => {
    return (dispatch: any) => {
        dispatch(sendRegStart());

        axios.post(`https://jsonplaceholder.typicode.com/todos`, {
            data,
            completed: false
        })
        .then(res => {
            dispatch(sendRegSuccess(res.data))
        })
        .catch(err => {
            dispatch(sendRegError(err))
        })
    }
}

const sendRegStart = () => ({
    type: REGISTER_STARTED
})

const sendRegSuccess = (data: any) => ({
    type: REGISTER_SUCCESS,
    payload: {
        ...data
    }
})

const sendRegError = (error:any) => ({
    type: REGISTER_ERROR,
    payload: {
        error
    }
})