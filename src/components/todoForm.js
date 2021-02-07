import React, {useContext} from 'react';
import Context from '../store/context';

function TodoForm() {

    const { state, actions } = useContext(Context);

    const onSubmitClick = (e) => {
        let id = state.currentId + 1;
        let input = document.querySelector('#todoInput');
        actions({type: 'addTodo', payload: {id: id, todo: input.value, isCompleted: false}});
    }

    return (
        <form className="rm-row flex-row">
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoInput" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-success mb-2" onClick={(e) => onSubmitClick(e)}>+</button>
                </div>
            </div>
        </form>
    );
}

export default TodoForm;