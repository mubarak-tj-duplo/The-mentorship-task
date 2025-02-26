// src/repositories/UserRepository.js
// Open and Close Principle
// Created a UserRepository class for database operations instead of modifying userService.js directly
// Now we can extend storage options (e.g., MySQL, MongoDB) without modifying existing code
class UserRepository {
    constructor() {
      this.users = [];
    }
  
    createUser(user) {
      this.users.push(user);
      return user;
    }
  
    getUsers() {
      return this.users;
    }
  }
  
  module.exports = UserRepository;
  