const express = require('express');

const {ServerConfig} = require('./config');
// const {ServerConfig, logger} = require('./config');
const apiRoutes = require('./routes');


const app = express();
// any request coming for api, this will redirect to rotues 
app.use('/api', apiRoutes);

// console.log(process.env); 
app.listen(ServerConfig.PORT, () =>{
    console.log(`sucessfully started our server on port : ${ServerConfig.PORT}`);
    // logger.info("successfully started the file", {} )
});
