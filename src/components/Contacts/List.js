import React from 'react';
import { contactSelector, removeAllContact } from '../../redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item';
function List() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactSelector.selectAll);
    const total = useSelector(contactSelector.selectTotal);
    
    const handleDeleteAll = () => {
        if(window.confirm('Are you sure?')) {
            dispatch(removeAllContact())
        }
    }

    return (
        <div>
            {total > 0 && (
                <div 
                className='deleteAllBtn'
                onClick={handleDeleteAll}
                >Delete All</div>
            )}
        
            <ul className='list'>
                {contacts.map((contact) => (
                    <Item key={contact.id} item={contact}/>
                ))}
            </ul>
        </div>
    )
}

export default List
