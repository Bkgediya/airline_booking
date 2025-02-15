const express = require('express')
const { serverConfig ,logger} = require('./config/index')
const apiRoutes = require('./routes');
const app = express();

app.use('/api',apiRoutes)

app.listen(serverConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${serverConfig.PORT}` )
    logger.info("Successfully started the server","root", {})
})