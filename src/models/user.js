import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  age: Number,
  city: String
});

const User = mongoose.model('user', userSchema);

export default User;
