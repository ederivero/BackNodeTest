"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prueba_controller = {
    getAll: (req, res) => {
        res.status(200).json({
            message: 'Ok',
            content: [{
                    id: 1,
                    modelo: 'XT60',
                    catalogo_id: 4,
                    precio: 70.89
                },
                {
                    id: 2,
                    modelo: 'XT80',
                    catalogo_id: 4,
                    precio: 90.89
                }]
        });
    },
    postPrueba: (req, res) => {
        if (req.body) {
            res.status(201).json({
                message: 'Ok',
                content: req.body
            });
        }
        else {
            res.status(200).json({
                message: 'Error',
                content: 'Error al insertar producto'
            });
        }
    },
    actualizarPrueba: (req, res) => {
        let { id } = req.params;
        if (req.body) {
            res.status(201).json({
                message: 'Ok',
                content: `Se actualizo el producto con id: ${id}`
            });
        }
        else {
            res.status(200).json({
                message: 'Error',
                content: 'Error al actualizar producto'
            });
        }
    },
    eliminarPrueba: (req, res) => {
        if (req.params) {
            res.status(201).json({
                message: 'Ok',
                content: `Se elimino el producto ${req.params.id}`
            });
        }
        else {
            res.status(200).json({
                message: 'Error',
                content: 'Error al eliminar el producto'
            });
        }
    },
};
