import { useState } from 'react';

const INITIAL_FORM_STATE = {
    name: '',
    password: '',
    language: '',
}

function OlympicForm() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        console.log(form);
        e.preventDefault();
    }

    const onFieldChange = (e) => {
        console.log('onFieldChange');
        setForm(prev => ({ ...prev, [e.target.name]:e.target.value }));
    }

    return (
        <form className="OlympicForm" onSubmit={onOlympicRegister}>
            <div className="OlympicForm-Field">
                <label htmlFor="name">Name</label>
                <input 
                    className="OlympicForm-Control" 
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onFieldChange}
                />
            </div>
            <div className="OlympicForm-Field">
                <label htmlFor="password">Password</label>
                <input 
                    className="OlympicForm-Control" 
                    id="password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onFieldChange}
                />
            </div>
            <div className="OlympicForm-Field">
                <label htmlFor="language">Language</label>
                <select 
                    className="OlympicForm-Control"
                    name="language"
                    id="language"
                    value={form.language}
                    onChange={onFieldChange}
                >
                    <option value="">Choose ...</option>
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="coffeescript">CoffeeScript</option>
                </select>
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
        </form>
    )
}

export default OlympicForm;
