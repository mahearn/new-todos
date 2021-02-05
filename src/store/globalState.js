import {useState} from 'react';

const GlobalState = () => {
    const [state, setState] = useState(
        {
            value: '',
            list: []
        }
    );

    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload);
            default:
                return state;
        }
    }

    return {state, actions};
}

export default GlobalState;