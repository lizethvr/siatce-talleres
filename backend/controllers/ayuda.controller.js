exports.crearAyuda = async (req, res) => {
    const {ayuda} = req.body
    const id = req.params

    res.send(ayuda+'desde '+ id)
}

exports.verAyuda = async (req, res) => {
    res.send('Mira las ayudas')
}

