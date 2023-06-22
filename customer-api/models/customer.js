const mongoose =require('mongoose');

const customerSchema = new mongoose.Schema({
    
     name: {
    type: String,
    required: true
  },
  age: {
   type: Number, required: false ,
   unique: false,
    
   
  },
  birthday: {
    type: Date,
    
  },
  address: {
    type: String,
    
}
});
//allow null values for age
// customerSchema.index({ age: 1 }, { unique: true, partialFilterExpression: { age: { $exists: true } } });
const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;