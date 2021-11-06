function OlympicForm() {
    return (
        <form className="OlympicForm">
            <div className="OlympicForm-Field">
                <label htmlFor="name">Name</label>
                <input 
                    className="OlympicForm-Control" 
                    id="name"
                />
            </div>
            <button className="OlympicForm-Button OlympicForm-Submit">Submit</button>
            <button className="OlympicForm-Button OlympicForm-Clear">Clear</button>
        </form>
    )
}

export default OlympicForm;