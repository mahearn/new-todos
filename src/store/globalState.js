import {useState} from 'react';

const GlobalState = () => {
    /* state.list:
        [{id: 1, todo: "", isCompleted: false}]
    */
    const [state, setState] = useState({
        currentId: 0,
        list: []
    });

    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'readFromStorage':
                return state;

            case 'addTodo':
                return setState({...state, currentId: state.currentId + 1, list: [...state.list, payload]});

            case 'updateIsCompleted':
                return setState({...state, ...state.currentId, list: [payload]});

            default:
                return state;
        }
    }

    return {state, actions};
}

export default GlobalState;