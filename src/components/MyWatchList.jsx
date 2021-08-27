import React, {useState, useEffect} from 'react';
import ToWatchItem from './ToWatchItem';
import MyWatchListForm from './MyWatchListForm';

function MyWatchList() {

    const [todos, setToWatch] = useState([]);

    useEffect(() => {
        const getItemsToStorage = JSON.parse(localStorage.getItem('mywatchlist'));

        if (getItemsToStorage) {
            setToWatch(getItemsToStorage);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('mywatchlist', JSON.stringify(todos));
    }, [todos])

    const addToWatch = todo => {
       if (!todo.text || /^\s*$/.test(todo.text)) {
           return;
       }

       const newToWatch = [todo, ...todos];
       setToWatch(newToWatch);
    };

    const updateToWatch = (toWatchId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setToWatch(prev => prev.map(item => (item.id === toWatchId ? newValue : item)));
    }

    const removeToWatch = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id) 

        setToWatch(removeArr);
    };

    const completeToWatch = id => {
        let updatedToWatch = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setToWatch(updatedToWatch);
    }

    return (
        <div>
            <h1>My Watch List</h1>
            <MyWatchListForm onSubmit={addToWatch} />
            <ToWatchItem
                todos={todos}
                completeToWatch={completeToWatch}
                removeToWatch={removeToWatch}
                updateToWatch={updateToWatch}
            />
        </div>
    )
}

export default MyWatchList;
