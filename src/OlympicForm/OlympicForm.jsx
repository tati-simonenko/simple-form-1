import { useState } from 'react';
import { useRef } from 'react';

const INITIAL_FORM_STATE = {
    name: '',
    password: '',
    language: '',
    level: 'junior',
    agree: false,
    textarea: '',
    file: undefined,
}

function OlympicForm() {
    const [form, setForm] = useState(INITIAL_FORM_STATE);
    const avatarRef = useRef(null);

    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        console.log(form);
        e.preventDefault();
    }

    const onAvatarLoad = (e) => {
        const target = e.target;

        const file = target.files && target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {
            const image = e.target.result;
            avatarRef.current.src = image;
            setForm(prev => ({ ...prev, file}));
        }

        reader.readAsDataURL(file);

    }

    const onFieldChange = (e) => {
        console.log('onFieldChange');

        const { target } = e;

        setForm(prev => ({ 
            ...prev, 
            [e.target.name]:target.type === 'checkbox' ? target.checked : target.value 
        }));
    }

    const onClear = () => {
         setForm(INITIAL_FORM_STATE);
    }

    return (
        <form className="OlympicForm" onSubmit={onOlympicRegister}>
            <div className="OlympicForm-Field">
                <img src="" alt="Your avatar" ref={avatarRef} />
                <label htmlFor="avatar">Avatar</label>
                <input 
                    className="OlympicForm-Control" 
                    id="avatar"
                    type="file"
                    name="avatar"
                    onChange={onAvatarLoad}
                />
            </div>
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
            <div className="OlympicForm-Field">
                <p>Language proficiency</p>
                <div>
                    <label htmlFor="junior">Junior</label>
                    <input 
                        className="OlympicForm-Control" 
                        id="junior"
                        type="radio"
                        checked={form.level === 'junior'}
                        name="level"
                        value="junior"
                        onChange={onFieldChange}
                    />
                </div>
                <div>
                    <label htmlFor="middle">Middle</label>
                    <input 
                        className="OlympicForm-Control" 
                        id="middle"
                        type="radio"
                        checked={form.level === 'middle'}
                        name="level"
                        value="middle"
                        onChange={onFieldChange}
                    />
                </div>
                <div>
                    <label htmlFor="senior">Senior</label>
                    <input 
                        className="OlympicForm-Control" 
                        id="senior"
                        type="radio"
                        checked={form.level === 'senior'}
                        name="level"
                        value="senior"
                        onChange={onFieldChange}
                    />
                </div>
            </div>
            <div className="OlympicForm-Field">
                <label htmlFor="agree">Agree with everything</label>
                <input 
                    className="OlympicForm-Control" 
                    id="agree"
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={onFieldChange}
                />
            </div>
            <div className="OlympicForm-Field">
                <p><label htmlFor="textarea">Any questions?</label></p>
                <textarea 
                    className="OlympicForm-Control" 
                    id="textarea"
                    name="textarea"
                    value={form.textarea}
                    onChange={onFieldChange}
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear" onClick={onClear}>Clear</button>
        </form>
    )
}

export default OlympicForm;
