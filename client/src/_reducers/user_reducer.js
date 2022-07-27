import {
    LOGIN_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) { // 각각의 타입마다 다른 대응을 해야하기 때문에 switch 문법을 이용해 처리함
        case LOGIN_USER:
                return { ...state, loginSuccess: action.payload } // '...state'은 빈상태를 나타냄
            break;
    
        default:
            return state;
    }
};
