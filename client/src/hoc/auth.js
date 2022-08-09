import React from 'react';
// import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

function Auth(SpecificComponent, option, adminRoute = null) {  // LandingPage Component, option, adminRoute

    // option 종류
    // 1. null -> 아무나 출입이 가능한 페이지
    // 2. true -> 로그인한 유저만 출이이 가능한 페이지
    // 3. false -> 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        React.useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response);
            });
        }, []);

        return (
            <SpecificComponent />
        );
    };

    return AuthenticationCheck
}
export default Auth;