import React, {useEffect, useContext} from 'react';
import Context from "../store/context";

import 'bootstrap/dist/css/bootstrap.css';

const TodoList = () => {
    const {state, actions} = useContext(Context);

    // useEffect(() => {
    //     if(!state.list) return <div>Loading...</div>
    //     // if(!state.list) return null;
    // }, [state.list]);

    const onCompletedClick = (e, id) => {
        id = parseInt(id, 10);
        const itemIndex = state.list.findIndex(x => x.id === id);
        const newList = [...state.list];
        newList[itemIndex] = {
            ...newList[itemIndex],
            isCompleted: true
        }
        actions({type: 'updateIsCompleted', payload: {...state, list: newList}});
    }

    const onDeleteClick = (e) => {
        const id = e.target.dataset.id;
        // const newList = state.list.filter(x => x.id !== id);
        // actions({type: 'deleteTodo', payload: {...state, list: newList}});
        actions({type: 'deleteTodo', payload: id});
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
                        ? <span id={item.id} className="badge badge-success float-right m2" onClick={(e) => onCompletedClick(e, item.id)}>Pending</span> 
                        : <span className="badge badge-default float-right m2">Done</span>
                    }
                    </p>
                    <button data-id={item.id} className="btn btn-danger" onClick={(e) => onDeleteClick(e)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;