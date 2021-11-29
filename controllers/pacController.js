const { query } = require('express');
const con = require('../config/conexion');
const paciente = require('../model/paciente');
const usuario = require("../model/usuario");
const cita = require('../model/cita');
const receta = require('../model/receta');
const session = require('express-session');
const fs = require('fs');
const expediente = require('../model/expedientes');

module.exports = {

    index:function(req, res, next) {
        console.log(req.session.Activos);
        if (req.session.Activos == undefined) {
            req.session.Activos = [];
        }
        res.render('index', { title: 'Express' });
    },

    rPaciente:function(req, res, next) {
        res.render('rPaciente');
    },

    isPaciente:function(req, res, next) {
        if (req.session.Activos == undefined) {
            req.session.Activos = [];
        }
        res.render('isPaciente');
    },

    registrarPac:function(req, res, next) {
        
        usuario.buscarUsu(con, req.body, function (err, datos) {
            if (datos.length == 0) {
                paciente.guardarPac(con, req.body, function (err) {
                    if(!err) {
                        console.log('Guardado paciente');
                        paciente.buscarId(con, req.body, function (err, datos) {
                            console.log(datos[datos.length - 1].IdPac);
                            usuario.guardarUsu(con,req.body, "p", datos[datos.length - 1].IdPac, function (err) {
                                if(!err) {
                                    expediente.registrarFich(con,datos[datos.length - 1].IdPac, function (err) {
                                        if (!err) {
                                            console.log("Guardao");
                                            expediente.registrarAnt(con,datos[datos.length - 1].IdPac,function (err) {
                                                if(!err) {
                                                    res.redirect('/isPaciente');
                                                }
                                            });
                                        }else  {
                                            res.redirect('/rPaciente');
                                        }
                                    } );
                                }else {
                                    res.redirect('/rPaciente');
                                }
                            });
                        });
                        
                    }
                });
            }else{
                res.redirect('/rPaciente');
            }
        })
    },

    avisoDePrivacidad:function (req, res, next) {
        res.render('avisoDePrivacidad');
    },

    terminosCondicionesUso:function (req, res, next) {
        res.render('terminosCondicionesUso');
    },

    pantallaInicial:function (req, res, next) {
        const MUsuario = req.session.MUsuario;
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            if(MUsuario.TipoUsu == 'p'){
                cita.cargarPac(con,MUsuario.IdTip, function (err, data) {
                    const Citas = data;
                    res.render('pantallaInicialP',{
                        MUsuario,
                        Citas
                    });
                });
            }else {
                cita.cargarMed(con,MUsuario.IdTip, function (err, data) {
                    const Citas = data;
                    res.render('pantallaInicialM',{
                        MUsuario,
                        Citas
                    });
                });
            }
        }
    },

    registrarCitaV:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            res.render('registrarCita');
        }
    },

    seleccionarMedico:function (req, res, next) {
        if(req.session.Selectos == undefined) {
            res.redirect('/registrarCitaV');
        }else {
            const Medicos = req.session.Selectos;
            res.render('buscarMedico', {
                Medicos
            });
        }
    },

    cancelarCit:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            delete req.session.FechaCit;
            delete req.session.HoraCit;
            delete req.session.Selectos;
            res.redirect('/pantallaInicial');
        }
    },

    guardarCita:function (req, res, next) {
        if(req.session.Selectos == undefined) {
            res.redirect('/registrarCitaV');
        }else {
            cita.crearCit(con,req.session.HoraCit,req.session.FechaCit,req.body.CedulaMed, req.session.MUsuario.IdTip, function (err) {
                if(!err) {
                    delete req.session.FechaCit;
                    delete req.session.HoraCit;
                    delete req.session.Selectos;
                    res.redirect('/pantallaInicial');
                }
            });
        }
    },
    cancelarCita:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            console.log(req.body.CodCit);
            receta.borrarReceta(con,req.body.CodCit, function (err) {
                console.log(err);
                cita.cancelarCit(con, req.body.CodCit, function (err) {
                    res.redirect('/pantallaInicial');
                });
            });
        }
    },
    visualizarReceta:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            console.log(req.body.CodCit);
            receta.buscarReceta(con, req.body.CodCit, function (err, data) {
                if(data.length == 0) {
                    res.redirect('/pantallaInicial');
                }else {
                    const Datos = data;
                    res.render('visualizarReceta',{
                        Datos
                    });
                }
            });
        }
    },
    visualizarExpediente:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            expediente.buscarFich(con, req.session.MUsuario.IdTip, function (err, data) {
                console.log(data);
                const Fich = data[0];
                const IdPac = req.session.MUsuario.IdTip;
                const Tipo = req.session.MUsuario.TipoUsu;
                expediente.buscarAnt(con,IdPac, function (err, dato) {
                    const Ant = dato[0];
                    res.render('agregarExpediente', {
                        Fich,
                        IdPac,
                        Tipo,
                        Ant
                    });
                });
            });
        }
    }
}