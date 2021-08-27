import React, {useState} from 'react';
import MyWatchListForm from './MyWatchListForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function ToWatchItem({todos, completeToWatch, removeToWatch, updateToWatch}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateToWatch(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <MyWatchListForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'towatch-row complete' : 'towatch-row'} 
            key={index}>
            <div key={todo.id} onClick={() => completeToWatch(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeToWatch(todo.id)}
                    className='delete-icon'
                    />
                <TiEdit 
                    onClick={() => setEdit({ id: todo.id, value: todo.text})}
                    className='edit-icon'
                    />
                <div className="item-checkbox" key={todo.id} onClick={() => completeToWatch(todo.id)}></div>
            </div>
        </div>
    ))
}

export default ToWatchItem;
