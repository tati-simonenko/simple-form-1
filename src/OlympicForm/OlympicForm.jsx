function OlympicForm() {
    const onOlympicRegister = (e) => {
        console.log('onOlympicRegister');
        e.preventDefault();
    }

    return (
        <form className="OlympicForm">
            <div className="OlympicForm-Field">
                <label htmlFor="name">Name</label>
                <input 
                    className="OlympicForm-Control" 
                    id="name"
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
            <button className="OlympicForm-Button OlympicForm-Submit" onClick={onOlympicRegister}>Submit</button>
        </form>
    )
}

export default OlympicForm;
