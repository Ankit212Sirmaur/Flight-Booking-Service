const dotenv = require('dotenv');

// loads enviroment variable in place
dotenv.config();

module.exports = {
    PORT : process.env.PORT
}