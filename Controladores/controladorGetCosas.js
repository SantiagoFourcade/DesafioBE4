const { randomUUID } = require("crypto");

const cosas = [{
    title: "titulo",
    Price: "precio",
    thumbnail: "img"
}];
//funcion
function enRango(num, min = 0, max = 10000) {
    return num >= min && num <= max;
}
//Controladores API
function controladorGetCosas({ query }, res) {
    let resultado;
    if (query.min || query.max) {
        resultado = cosas.filter(({ Price }) => enRango(Price, query.min, query.max));
    } else {
        resultado = cosas;
    }
    res.json(resultado);
}

function controladorPostCosas(req, res) {
    console.log(req);
    const cosaNueva = req.body;
    cosaNueva.id = randomUUID();
    cosas.push(cosaNueva);
    res.status(201);
    res.json(cosaNueva);
}

function controladorGetCosasPorId({ params: { id } }, res) {
    const buscado = cosas.find(c => c.id === id);
    if (!buscado) {
        res.status(404);
        res.json({ mensaje: "no se encontra cosa con ese ID (${id})" });
    } else {
        res.json(buscado);
    }
}

function controladorPutCosasPorId({ body, params: { id } }, res) {
    const indiceBuscado = cosas.findIndex(c => c.id === id);
    if (indiceBuscado === -1) {
        res.status(404);
        res.json({ mensaje: "no se encontro cosa con ese id (${id})" });
    } else {
        cosas[indiceBuscado] = body;
        res.json(body);
    }
}

function controladorPatchCosasPorId({ body, params: { id } }, res) {
    const indiceBuscado = cosas.findIndex(c => c.id === id);
    if (indiceBuscado === -1) {
        res.status(404);
        res.json({ mensaje: "no se encontro cosa con ese id (${id})" });
    } else {
        cosas[indiceBuscado] = { ...cosas[indiceBuscado], ...body };
        res.json(cosas[indiceBuscado]);
    }
}

function controladorDeleteCosasPorId({ body, params: { id } }, res) {
    const indiceBuscado = cosas.findIndex(c => c.id === id);
    if (indiceBuscado === -1) {
        res.status(404);
        res.json({ mensaje: "no se encontro cosa con ese id (${id})" });
    } else {
        const borrados = cosas.splice(indiceBuscado, 1);
        res.resStatus(204);
        //res.json(borrados[0])
    }
}

exports.controladorGetCosas = controladorGetCosas;
exports.controladorPostCosas = controladorPostCosas;
exports.controladorGetCosasPorId = controladorGetCosasPorId;
exports.controladorPutCosasPorId = controladorPutCosasPorId;
exports.controladorPatchCosasPorId = controladorPatchCosasPorId;
exports.controladorDeleteCosasPorId = controladorDeleteCosasPorId;


