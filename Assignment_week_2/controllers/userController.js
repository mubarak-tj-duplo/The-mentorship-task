const userService = require("../services/userService");

let userService;

exports.init = (service) => {
  userService = service;
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const user = userService.createUser(name, email);
  res.status(201).json(user);
};

exports.getUsers = (req, res) => {
  const users = userService.getUsers();
  res.json(users);
};
