import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getIsAddedContact = state => state.contacts.isAddedContact;

const getDeletedContact = state => state.contacts.isDeletedContact;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getIsAddedContact,
  getDeletedContact,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};

export default contactsSelectors;