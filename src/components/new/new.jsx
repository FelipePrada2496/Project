import React, { useState } from 'react';
import './new.css'; 
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { addContact } from '../../reducers/contactSlices';
import { addContactApi } from '../../services/api2';

function New () {

    const dispatch = useDispatch()

    const {first_name, last_name, email, isFavorite, onInputChange, resetForm} = useForm({
        first_name: '',
        last_name: '',
        email: '',
        isFavorite: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({first_name, last_name, email, isFavorite})
        const user = ({first_name, last_name, email, isFavorite, isDeleted: false})
        dispatch(addContact(user))
        await addContactApi(user)
        resetForm(); // Resetear el formulario después de enviar
        setFormOpen(false); // Cerrar el formulario después de enviar
    };

    const toggleForm = () => {
        setFormOpen(!formOpen); // Cambiar el estado del formulario
    };

    return (
        <div className="centered-container">
            <div className="container_new">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input name ='first_name' type="text" id="firstName" value={first_name} onChange={onInputChange} placeholder="First Name" className='container_new_input'/>
                    </div>
                    <div>
                        <input name ='last_name' type="text" id="lastName" value={last_name} onChange={onInputChange} placeholder="Last Name" className='container_new_input'/>
                    </div>
                    <div>
                        <input name ='email' type="email" id="email" value={email} onChange={onInputChange} placeholder="Email" className='container_new_input' />
                    </div>
                    <div>
                        <label>
                            <div className='checkbox'>
                                nable like favorite
                                <input name ='isFavorite' type="checkbox" checked={isFavorite} onChange={onInputChange} className='boton_checkbox' />
                            </div>
                        </label>
                        <div className='button_save'>
                            <button type="submit">Save</button>
                            <button type="button" onClick={toggleForm}>Cancel</button> {/* Agregar un botón de cancelar */}
  
                        </div>
                    </div>
                    
                </form>
                
            </div>
        </div>

        
    );
}

export default New;
