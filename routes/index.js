const express = require('express');
const router = express.Router();
const pacController = require("../controllers/pacController");
const usuController = require("../controllers/usuController");
const medController = require("../controllers/medController");
const multer = require('multer');

const rutaAlmacen = multer.diskStorage({
    destination:function (req, file, callback) {
        callback(null, './controllers/archivos');
    },
    filename:function (req, file, callback) {
        console.log(file);
        callback(null,"" +file.originalname);
    }
});

let cargar = multer({storage:rutaAlmacen});

/* GET home page. */
router.get('/', pacController.index);

router.get('/rPaciente', pacController.rPaciente);

router.get('/isPaciente', pacController.isPaciente);

router.post('/registrarPac', pacController.registrarPac);

router.get('/avisoDePrivacidad', pacController.avisoDePrivacidad);

router.get('/terminosCondicionesUso', pacController.terminosCondicionesUso);

router.post('/validarUsu', usuController.validarUsu);

router.get('/pantallaInicial', pacController.pantallaInicial);

router.get('/cerrarSesion', usuController.cerrarSesion);

router.post('/actualizarUsu', usuController.actualizarUsu);

router.get('/registrarCitaV', pacController.registrarCitaV);

router.post('/buscarMedico', medController.buscarMedico);

router.get('/seleccionarMedico', pacController.seleccionarMedico);

router.get('/cancelarCit', pacController.cancelarCit);

router.post('/guardarCita', pacController.guardarCita);

router.post('/cancelarCita', pacController.cancelarCita);

router.post('/visualizarReceta', pacController.visualizarReceta);

router.post('/editarReceta', medController.editarReceta);

router.post('/guardarReceta', medController.guardarReceta);

router.post('/actualizarReceta', medController.actualizarReceta);

router.post('/agregarExpediente', medController.agregarExpediente);

router.get('/visualizarExpediente', pacController.visualizarExpediente);

router.post('/mensajeriaP', usuController.mensajeriaP);

router.post('/mensajeriaM', usuController.mensajeriaM);

router.post('/cargarExpediente', medController.cargarExpediente);

router.post('/cargarAntecedentes', medController.cargarAntecedentes);

module.exports = router;
