import { useState } from 'react';

function OlympicForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        console.log(name);
        console.log(password);
        e.preventDefault();
    }

    const onNameChange = (e) => {
        console.log('onNameChange');
        setName(e.target.value);
    }

    const onPasswordChange = (e) => {
        console.log('onPasswordChange');
        setPassword(e.target.value);
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
            <div className="OlympicForm-Field">
                <label htmlFor="password">Password</label>
                <input 
                    className="OlympicForm-Control" 
                    id="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
        </form>
    )
}

export default OlympicForm;
