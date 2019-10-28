"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const prueba_1 = require("../routes/prueba");
var swaggerUi = require('swagger-ui-express');
const DocumentacionAPI = __importStar(require("../docs/swagger.json"));
// import { sequelize } from '../config/sequelize';
class Server {
    /**
     *
     */
    constructor() {
        this.app = express_1.default();
        this.configureCors();
        this.puerto = process.env.PORT || 3000;
        this.configureBodyParser();
        this.routes();
    }
    configureCors() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
            res.header('Allow', 'GET, POST, DELETE');
            next();
        });
    }
    configureBodyParser() {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    // connectBD() {
    //     sequelize.sync({ force: false }).then(() => {
    //         console.log("Base de datos creada con éxito");
    //     }).catch((error: any) => { 
    //         console.log(error);
    //         console.log("Error al crear la base de datos");
    //     });
    // }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('La API/RESt ha escuchado tus suplicas :D');
        });
        this.app.use('/api', prueba_1.prueba_router);
        this.app.use('/documentacion', swaggerUi.serve, swaggerUi.setup(DocumentacionAPI));
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log('Servidor corriendo correctamente en el puerto ' + this.puerto);
            //this.connectBD();
        });
    }
}
exports.Server = Server;
