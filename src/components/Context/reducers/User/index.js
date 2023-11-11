import { useReducer } from 'react';
const initialState = {id: 0};

export default function User() {
    const UserLog = (state, { type, payload }) => {
        console.log(payload);
        switch (type) {
            case 'LOGIN':
                return {id: payload};

            case 'LOGOUT':
                return initialState;

            default:
                return state;
        }
    };

    return useReducer(UserLog, initialState);
}
