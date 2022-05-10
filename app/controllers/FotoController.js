class FotoController {
    static async listaTodasAsFotos(req, res) {
        try {
            const fotos = [
                { _id: 1, titulo: 'Leão', url: 'https://classic.exame.com/wp-content/uploads/2019/07/rei-leao.jpg?quality=70&strip=info&w=1024' },
                { _id: 2, titulo: 'Leão 2', url: 'https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao.jpg' }
            ]
            return res.status(200).json(fotos)
        }catch(err){
            return res.status(200).json({message: err.message})
        }
    }
}

module.exports = FotoController;