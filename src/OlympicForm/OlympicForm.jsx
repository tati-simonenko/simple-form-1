import { useState } from 'react';

function OlympicForm() {
    const [name, setName] = useState('');

    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        console.log(name);
        e.preventDefault();
    }

    const onNameChange = (e) => {
        console.log('onNameChange');
        setName(e.target.value);
    }

    return (
        <form className="OlympicForm" onSubmit={onOlympicRegister}>
            <div className="OlympicForm-Field">
                <label htmlFor="name">Name</label>
                <input 
                    className="OlympicForm-Control" 
                    id="name"
                    value={name}
                    onChange={onNameChange}
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
        </form>
    )
}

export default OlympicForm;
