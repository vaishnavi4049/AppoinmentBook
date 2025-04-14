import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String
});

export default mongoose.model('Doctor', doctorSchema);
