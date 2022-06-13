import { User } from "../../models/User.js";

//criando controller para criar usuario
const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = await User.create({ username });
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

//criando controller para listar todos usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    console.log(user);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default { createUser, getUsers, getUserById };
