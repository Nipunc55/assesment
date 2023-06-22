const Customer = require('../models/customer');

// Insert a new customer
const createCustomer = async (customerData) => {
  try {
    const customer = new Customer(customerData);
    await customer.save();
    return { success: true, message: 'Customer created successfully' };
  } catch (error) {
    console.log('Error creating customer:', error);
    return { success: false, error: 'Error creating customer' };
  }
};

// Get all customers
const getAllCustomers = async () => {
  try {
    const customers = await Customer.find();
    return { success: true, data: customers };
  } catch (error) {
    return { success: false, error: 'Error retrieving customers' };
  }
};

// Get a specific customer
const getCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return { success: false, error: 'Customer not found' };
    }
    return { success: true, data: customer };
  } catch (error) {
    return { success: false, error: 'Error retrieving customer' };
  }
};

// Delete a customer
const deleteCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findByIdAndRemove(customerId);
    if (!customer) {
      return { success: false, error: 'Customer not found' };
    }
    return { success: true, message: 'Customer deleted successfully' };
  } catch (error) {
    return { success: false, error: 'Error deleting customer' };
  }
};
//upadte a customer
const updateCustomerById = async (customerId,updatedData) => {
  console.log(customerId);
  try {
    const customer = await Customer.findByIdAndUpdate(customerId, updatedData, { new: true });
    if (!customer) {
      return { success: false, error: 'Customer not found' };
    }
    return { success: true, data: customer };
  } catch (error) {
    console.log(error);
    return { success: false, error: 'Error updating customer' };
  }
};
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
};
