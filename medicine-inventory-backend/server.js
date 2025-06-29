const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/medicine_inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Mongoose schema
const medicineSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  expiryDate: String
});

const Medicine = mongoose.model('Medicine', medicineSchema);

// Routes

// Get all medicines
app.get('/medicines', async (req, res) => {
  const medicines = await Medicine.find();
  res.json(medicines);
});

// Add a medicine
app.post('/medicines', async (req, res) => {
  const newMed = new Medicine(req.body);
  await newMed.save();
  res.json(newMed);
});

// Delete a medicine by ID
app.delete('/medicines/:id', async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: 'Medicine deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
