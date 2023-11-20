import { useState } from 'react';

function Input() {
    const [value, setValue] = useState('Startinė reikšmė');

    const handleChange = (e) => {
        // e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <div className="container my-5">
            <input 
                type="text" 
                className="form-control" 
                name="tekstas" 
                placeholder="Įveskite vardą" 
                onChange={handleChange}
            />
            <div>
                {value}
            </div>
        </div>
    );
}

export default Input;