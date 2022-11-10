
function controladorGetRoot(req, res) {
    res.send("todo bien");
}

function controladorGetBienvenida(req, res) {
    res.json({ mensaje: "hola" });
}

function controladorGetDespedida(req, res) {
    res.json({ mensaje: "chau" });
}



exports.controladorGetDespedida = controladorGetDespedida;
exports.controladorGetBienvenida = controladorGetBienvenida;
exports.controladorGetRoot = controladorGetRoot;