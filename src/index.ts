import {SetupServer} from '@src/server'
import config from 'config'
(async () => {
    const server = new SetupServer()
    server.init()
    server.start()
    console.log("ENV: ", config.get("App.Tyr"))
})()