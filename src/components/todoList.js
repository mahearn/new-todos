import React, {useEffect, useContext} from 'react';
import Context from "../store/context";

import 'bootstrap/dist/css/bootstrap.css';

const TodoList = () => {
    const {state, actions} = useContext(Context);

    const onCompletedClick = (e) => {
        const id = parseInt(e.target.id, 10);
        const itemIndex = state.list.findIndex(x => x.id === id);
        const newList = state.list;
        newList[itemIndex].isCompleted = true;
        return actions({type: 'updateIsCompleted', payload: {...state, list: newList}});
    }

    //apply "card" class only if list item(s) exist
    let cardDivClass = "";
    if (state.list.length > 0) {
        cardDivClass = "card";
    }

    return (
        <div className={cardDivClass}>
            {state.list.map((item) => (
                <div className="card-body" key={item.id}>
                    <p className="card-text">{item.todo} 
                    {!item.isCompleted 
                        ? <span id={item.id} className="badge badge-success float-right m2" onClick={(e) => onCompletedClick(e)}>Pending</span> 
                        : <span className="badge badge-default float-right m2">Done</span>
                    }
                    </p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;