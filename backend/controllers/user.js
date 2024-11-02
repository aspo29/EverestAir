import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log('Reached createUser');
  console.log(req.body);
  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      `${email}`,
      { expiresIn: '1h' }
    );

    // Respond with redirect information to guide the front end
    res.status(201).json({ result, token, redirectTo: '/login' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.log(error);
  }
};

export const login = async (req, res) => {
  console.log('Login Reached');
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const oldUser = await UserModel.findOne({ email });
    console.log(oldUser);
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      `${email}`,
      { expiresIn: '1h' }
    );

    // Respond with redirect information to guide the front end
    res.status(200).json({ result: oldUser, token, redirectTo: '/' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};