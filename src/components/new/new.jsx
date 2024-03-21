import React, { useState } from 'react';
import './new.css'; 

function New() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', { firstName, lastName, email, isChecked });
        setFirstName('');
        setLastName('');
        setEmail('');
        setIsChecked(false);
    };

    return (
        <div className="centered-container">
            <div className="container_new">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
                    </div>
                    <div>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                    </div>
                    <div>
                        <label>
                            <div className='checkbox'>
                                <p>Enable like favorite</p>
                                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}  />
                            </div>
                        </label>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default New;
