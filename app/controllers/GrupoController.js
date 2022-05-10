class GrupoController {
    static async listaTodosOsGrupos(req, res) {
        try {
            const grupos = [
                { _id: 1, nome: 'esporte' },
                { _id: 2, nome: 'lugares' },
                { _id: 3, nome: 'animais' }
            ];

            return res.status(200).json(grupos)
        } catch (err) {
            return res.status(200).json({ message: err.message })
        }
    }
}

module.exports = GrupoController;