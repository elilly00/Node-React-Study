import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    // state
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    };
    const onSubmitHandler = (event) => {
        event.preventDefault(); // preventDefault를 작성하지 않으면 버튼을 누를 때마다 페이지가 리프레시된다.
        
        let body = {
            email: Email,
            password: Password
        };

        dispatch(loginUser(body)).then(response => {
            if(response.payload.loginSuccess) {
                navigate('/'); // rootPage로 이동
            } else {
                alert('Error');
            }
        });
    };

    return (
        <div 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                     width: '100%', height: '100vh'}}
            onSubmit={onSubmitHandler}
        >
            <form style={{ display: 'flex', flexDirection: 'column' }}
                  onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                
                <br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;