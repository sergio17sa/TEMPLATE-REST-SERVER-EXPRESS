const express = require('express')
const cors = require('cors')


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "api/usuarios"

        // Middlewares
        this.middlewares()

        // Routes 
        this.routes();

    };


    middlewares() {

        // Middleware that allow requests from external domains 
        this.app.use(cors())

        // Middleware to read public directory
        this.app.use(express.static('public'))

        // Middleware to parse information tyoe json of requests
        this.app.use(express.json())
    }


    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    };



    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando ando en el puerto ${this.port}`)
        })
    }


};




module.exports = Server