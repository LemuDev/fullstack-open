const app = require("./src/app")
const logger = require("./src/utils/logger")
const config = require("./src/utils/config")


app.listen(config.PORT, ()=>{
    logger.info(`Running on 127.0.0.1:${config.PORT}`)
})

