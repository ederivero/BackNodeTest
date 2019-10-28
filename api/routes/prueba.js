"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prueba_1 = require("../controllers/prueba");
exports.prueba_router = express_1.Router();
exports.prueba_router.get('/prueba', prueba_1.prueba_controller.getAll);
exports.prueba_router.post('/prueba', prueba_1.prueba_controller.postPrueba);
exports.prueba_router.put('/prueba/:id', prueba_1.prueba_controller.actualizarPrueba);
exports.prueba_router.delete('/prueba/:id', prueba_1.prueba_controller.eliminarPrueba);
