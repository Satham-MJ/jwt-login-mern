const Route = require("express").Router();
const Users = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Route.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ username });
  if (!user) {
    res.json({ error: "User Not Found.." });
  } else {
    const status = await bcrypt.compare(password, user.password);
    if (!status) {
      res.json({ error: "Invalid User Name / Password" });
    } else {
      var token = jwt.sign(
        { user: user._id, name: user.name },
        process.env.ENCRYPT_KEY
      );
      //   res.header("auth", token).send(token);
      res.json({ authToken: token });
    }
  }
});
Route.post("/register", async (req, res) => {
  const { username, password, name } = req.body;
  const newPassword = await bcrypt.hash(password, 10);
  const User = await new Users({ username, name, password: newPassword });
  try {
    const data = await User.save();
    res.json({ data, message: "User Registered Successfully" });
  } catch (error) {
    res.json({ error });
  }
});

const validUser = async (req, res, next) => {
  var authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  //Bearer TOKEN
  if (token == null) return res.sendStatus(401);

  //   Verify Token
  const status = await jwt.verify(token, process.env.ENCRYPT_KEY);
  req.user_id = status.user;
  next();
};
Route.get("/getAll", validUser, async (req, res) => {
  try {
    console.log(req.user_id);
    const data = await Users.find().select(["-password"]);
    return res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = Route;
