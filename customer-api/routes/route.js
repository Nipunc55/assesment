const express = require('express');
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById
} = require('../controller/controller');

const router = express.Router();

router.post('/insert-customer', async (req, res) => {
    console.log("insert-customer");
  const { name, age, birthday,address } = req.body;
  const customerData = { name, age, birthday,address };

  const result = await createCustomer(customerData).catch((error) => {
    console.log('Error creating customer:', error);
  });

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    console.log(result.error);
    res.status(500).json({ error: result.error });
  }
});

router.get('/get-customers', async (req, res) => {
  const result = await getAllCustomers();

  if (result.success) {

    if(result.data.length >= 0){
        res.status(200).json(result.data);
        return;
    }
    console.log("no customer found");
        res.status(404).json({ error: 'No customer found' });
    
  } else {
    res.status(500).json({ error: result.error });
  }
});

router.get('/get-customer/:id', async (req, res) => {
  const customerId = req.params.id;

  const result = await getCustomerById(customerId);

  if (result.success) {
    res.json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
});

router.delete('/delete-customer/:id', async (req, res) => {
  const customerId = req.params.id;

  const result = await deleteCustomerById(customerId);

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(500).json({ error: result.error });
  }
});
router.put('/update-customer/:id', async (req, res) => {
    const customerId = req.params.id;
    
    const { name, age, birthday,address } = req.body;
    const updatedData = { name, age, birthday,address };
    console.log(updatedData);
    const result = await updateCustomerById(customerId, updatedData);
    
    if (result.success) {
        res.status(201).json({ message: result.message });
    } else {
        res.status(500).json({ error: result.error });
    }
})

module.exports = router;
