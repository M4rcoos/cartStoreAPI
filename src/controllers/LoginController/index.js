import { User } from "../../models/User.js";

const createSession = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default { createSession };
