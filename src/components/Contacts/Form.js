import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';

function Form() {
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !number) return;

        dispatch(addContact({id: nanoid(), name, phone_number: number}));
        setName('');
        setNumber('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Please enter name'
                />
                <input 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder='Please enter phone number'
                />
                <div className='btn'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        
        </div>
    )
}

export default Form
