import axios from "axios"

const getContacts = async() => {
    const {data} = await axios.get("https://reqres.in/api/users?per_page=12");
    return data.data;
}

const getContactsApi = async(contact) => {
    const {data} = await axios.get("http://localhost:8000/contacts", contact);
    return data;
}

const addContactApi = async(contact) => {
    await axios.post("http://localhost:8000/contacts", contact);
}

const updateContactApi = async(contact) => {
    await axios.put(`http://localhost:8000/contacts/${contact.id}`, contact);
}

export {addContactApi, updateContactApi, getContactsApi, getContacts}