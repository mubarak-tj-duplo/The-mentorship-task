const BaseUserService = require("./baseUserService")

const users = [];

// exports.createUser = (name, email) => {
//   const user = { id: users.length + 1, name, email };
//   users.push(user);
//   return user;
// };

// exports.getUsers = () => {
//   return users;
// };


class UserService extends BaseUserService {
  constructor(userRepository) {
    super();
    this.userRepository = userRepository;
  }

  createUser(name, email) {
    const user = { id: Date.now(), name, email };
    return this.userRepository.createUser(user);
  }

  getUsers() {
    return this.userRepository.getUsers();
  }
}

module.exports = UserService;


