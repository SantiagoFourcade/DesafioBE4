const express = require("express");
const { controladorGetRoot, controladorGetBienvenida, controladorGetDespedida } = require("../Controladores/controladorGetRoot");

const routerWeb = express.Router();
routerWeb.get("/", controladorGetRoot);
routerWeb.get("/bienvenida", controladorGetBienvenida);
routerWeb.get("/despedida", controladorGetDespedida);


exports.routerWeb = routerWeb;