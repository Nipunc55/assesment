import axios from 'axios';

export async function getCustomers() {
    try {
        const response = await axios.get('http://localhost:3000/get-customers');
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function getCustomer(id) {
    try {
        const response = await axios.get(`http://localhost:3000/customers/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function insertCustomer(data) {
    try {
        const response = await axios.post('http://localhost:3000/insert-customer', data);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function updateCustomer(id, data) {
console.log(data);
    try {
        const response = await axios.put(`http://localhost:3000/update-customer/${id}`, data);
        return response;
    } catch (error) {
        console.error(error);
    }
}
export async function deleteCustomer(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/delete-customer/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
