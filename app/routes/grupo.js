const GrupoController = require('../controllers/GrupoController');

module.exports = app =>{
    app.get('/v1/grupos', GrupoController.listaTodosOsGrupos)   
}
