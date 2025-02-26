// src/services/BaseUserService.js
// Introduced a BaseUserService interface
// Ensures all services follow the same structure, making it safe to substitute different user services
class BaseUserService {
  createUser(name, email) {
    throw new Error("Method not implemented");
  }

  getUsers() {
    throw new Error("Method not implemented");
  }
}

module.exports = BaseUserService;
