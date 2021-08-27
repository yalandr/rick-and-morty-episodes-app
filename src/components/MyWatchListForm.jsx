import React, {useState, useEffect, useRef} from 'react'

function MyWatchListForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
       inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    return (
        <form className="towatch-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <div>
                    <input 
                    type="text" 
                    placeholder="Update your item" 
                    value={input} 
                    name="text"
                    className="towatch-input edit"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="towatch-button edit">Update</button>
                </div>
            ) : (
                <div>
                    <input 
                    type="text" 
                    placeholder="Input the code of the episode" 
                    value={input} 
                    name="text"
                    className="towatch-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="towatch-button">Add an episode</button>
                </div>
            )}
        </form>
    )
}

export default MyWatchListForm;
