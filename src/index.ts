import {SetupServer} from '@src/server'
(async () => {
    const server = new SetupServer()
    server.init()
    server.start()
})()