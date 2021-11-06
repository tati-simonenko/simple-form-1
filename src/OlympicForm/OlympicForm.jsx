import { useState } from 'react';

function OlympicForm() {
    const [name, setName] = useState('');

    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        e.preventDefault();
    }

    return (
        <form className="OlympicForm" onSubmit={onOlympicRegister}>
            <div className="OlympicForm-Field">
                <label htmlFor="name">Name</label>
                <input 
                    className="OlympicForm-Control" 
                    id="name"
                    value={name}
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
        </form>
    )
}

export default OlympicForm;
