import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const Register: React.FC = (): JSX.Element => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    
    const dispatch = useDispatch();
    const history = useHistory();

    function sendChel(): void {
        if (password !== '' && password == password2 && username !== '') {
            let data: object = {
                username : username,
                password : password
            }
            console.log(data);
            setUsername('');
            setPassword('');
            setPassword2('');
            history.push("/");

        } else {
            alert("чет ввели не так")
            setUsername('');
            setPassword('');
            setPassword2('');
        }
    }

    return (
        <>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="enter your name"/><br/>
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter your pass"/><br/>
            <input type="text" value={password2} onChange={(e)=>{setPassword2(e.target.value)}} placeholder="repeat pass"/><br/>
            <button onClick={sendChel}>Send</button>
        </>
    )
}
