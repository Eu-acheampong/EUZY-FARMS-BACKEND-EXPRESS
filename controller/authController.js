const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { firsName, lastName, phone, email, password } = req.body;

  //check if email is already registered
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).json({ msg: "Email already in use" });

  //check if email is already registered
  const phoneExist = await User.findOne({ phone });
  if (phoneExist) return res.status(400).json({ msg: "Phone already in use" });

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    firsName,
    lastName,
    phone,
    email,
    password: hashedPassword,
  });

  res.status(201).json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // check if user is in the database
  const user = await User.findOne({ email });
  // if user is not found
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  // compare Candidate's password with the story
  const isMatch = await bcrypt.compare(password, user.password);

  // if password do not match
  if (!isMatch) return res.status(400).json({ mesg: "Invalid credentials" });

  // generate token
  const token = jwt.sign(
    {
      id: user_id, // payload or object
    },
    "secret", // secret key used to encode the payload
    {
      expiresIn: "1hr", // options
    }
  );
  res.status(200).json({ token, user });
};

module.exports = {
  register,
  login,
};
