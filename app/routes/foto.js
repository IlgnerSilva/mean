const fotoController = require('../controllers/FotoController');

module.exports = app =>{
    app.get('/v1/fotos', fotoController.listaTodasAsFotos)   
}

