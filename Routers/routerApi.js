const express = require("express");
const { controladorGetCosas, controladorGetCosasPorId, controladorPostCosas, controladorDeleteCosasPorId, controladorPutCosasPorId, controladorPatchCosasPorId } = require("../Controladores/controladorGetCosas");


//Rutas

const routerApi = express.Router()
routerApi.get("/", controladorGetCosas)
routerApi.get("/:id", controladorGetCosasPorId)
routerApi.post("/", controladorPostCosas)
routerApi.delete(":id", controladorDeleteCosasPorId)
routerApi.put("/:id", controladorPutCosasPorId)
routerApi.patch("/:id", controladorPatchCosasPorId)


exports.routerApi = routerApi;