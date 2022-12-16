import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const contactAdaptor = createEntityAdapter();
export const contactSelector = contactAdaptor.getSelectors(state => state.contacts);

const initialState = contactAdaptor.getInitialState();

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        deleteContact: contactAdaptor.removeOne,
        removeAllContact: contactAdaptor.removeAll,
        updateContact: contactAdaptor.updateOne,
    },
});

export const { 
    addContact,
    deleteContact,
    removeAllContact,
    updateContact,
} = contactSlice.actions;
export default contactSlice.reducer;