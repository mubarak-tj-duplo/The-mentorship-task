const express = require('express');
const userRoute = require('./route');


const user = require('./route');

const app = express();

// Initialize dependencies
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
userController.init(userService);


app.use('/users', userRoute)

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});