import React from 'react'
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactSlice';
import { useNavigate } from 'react-router-dom';

function Form({contact, history}) {
    const [name, setName] = React.useState(contact.name);
    const [number, setNumber] = React.useState(contact.phone_number);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !number) return;

        dispatch(updateContact({
            id: contact.id,
            changes: {
                name,
                phone_number: number}
        }));
        navigate('/');
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
                    <button type='submit'>Update</button>
                </div>
            </form>
        
        </div>
    )
}

export default Form
