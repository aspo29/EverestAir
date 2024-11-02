import mongoose from 'mongoose';

const userStructure = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', userStructure);

export default UserModel;
