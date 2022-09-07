const { response } = require("express");





const getUsuarios = (req = Request, res = response) => {

    const { nombre } = req.query

    res.json({
        msg: 'esto es una solitud Get  - controller',
        nombre
    })

};  

const putUsuarios = (req = Request, res = Response) => {

    const { id } = req.params
    res.json({
        msg: 'esto es una solitud put - controller',
        id
    })

};

const postUsuarios = (req = Request, res = Response) => {


    const { nombre, edad } = req.body;
    res.json({
        msg: 'esto es una solitud post - controller',

    })

};

const patchUsuarios = (req = Request, res = Response) => {
    console.log('Estoy vivo')
    res.json({ msg: 'esto es una solitud patch - controller' })

};

const deleteUsuarios = (req = Request, res = Response) => {
    console.log('Estoy vivo')
    res.json({ msg: 'esto es una solitud delete - controller' })

};


module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    patchUsuarios,
    deleteUsuarios
}