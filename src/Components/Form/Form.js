import React from 'react';
import './Form.scss';

function Form() {
    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="pokemonInputField"
                       aria-describedby="inputHelp"/>
                <small id="inputHelp" className="form-text text-muted">Discover the world of Pokemon.</small>
            </div>
        </form>
    );
}

export default Form;