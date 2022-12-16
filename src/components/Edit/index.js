import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { contactSelector } from '../../redux/contactSlice';
import Form from './Form';

function Edit() {
    let { id } = useParams();

    const contact = useSelector(state => contactSelector.selectById(state, id));

    return (
        <div>
            <h1>Edit</h1>
            <Form contact={contact} />
        </div>
    )
}

export default Edit
