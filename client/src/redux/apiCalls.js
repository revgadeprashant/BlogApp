import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import axios from "axios";

export const loginacc = async(dispatch, user) => {
    dispatch(loginStart());
    try {

        const res = await axios.post(`http://localhost:8000/signin`, user);
        console.log(res.data.acessToken);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};