import { useState } from 'react';

const INITIAL_FORM_STATE = {
    name: '',
    password: '',
}

function OlympicForm() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        console.log(form);
        e.preventDefault();
    }

    const onNameChange = (e) => {
        console.log('onNameChange');
        setForm(prev => ({ ...prev, name:e.target.value }));
    }

    const onPasswordChange = (e) => {
        console.log('onPasswordChange');
        setForm(prev => ({ ...prev, password:e.target.value }));
    }

    return (
        <form className="OlympicForm" onSubmit={onOlympicRegister}>
            <div className="OlympicForm-Field">
                <label htmlFor="name">Name</label>
                <input 
                    className="OlympicForm-Control" 
                    id="name"
                    value={form.name}
                    onChange={onNameChange}
                />
            </div>
            <div className="OlympicForm-Field">
                <label htmlFor="password">Password</label>
                <input 
                    className="OlympicForm-Control" 
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={onPasswordChange}
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
        </form>
    )
}

export default OlympicForm;
