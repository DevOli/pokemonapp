import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  name: String,
  date: Date,
  ip: String
});

const RequestModel = mongoose.model('Request', RequestSchema);

export { RequestModel };
