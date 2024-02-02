const app = require('./src/app')
//``
const PORT = 5300

const server = app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PROT ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit SERVER EXPRESS'))
    // notify.send(ping...)
})

