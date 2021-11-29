const con = require('../config/conexion');
const usuario = require("../model/usuario");
const session = require('express-session');
const medico = require('../model/medico');

module.exports = {
    validarUsu:function (req, res, next) {
        usuario.buscarUsu(con, req.body,async function (err, datos) {
            if (datos.length != 0){
                if(datos[0].ContraUsu == req.body.ContraUsu){
                    req.session.MUsuario = datos[0];
                    res.redirect('/pantallaInicial');
                }else{
                    res.redirect('/isPaciente');
                }
            }else{
                res.redirect('/isPaciente');
            }
        });
    },
    cerrarSesion:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            delete req.session.MUsuario;
            res.redirect('/isPaciente');
        }
    },
    actualizarUsu:function (req, res, next) {
        if(req.session.MUsuario == undefined){
            res.redirect('/isPaciente');
        }else{
            console.log(req.body);
            console.log(req.session.MUsuario);
            if(req.body.NomUsu == req.session.MUsuario.NomUsu){
                usuario.actualizarUsu(con, req.session.MUsuario, req.body, function (err) {
                    if(!err) {
                        usuario.buscarUsu(con, req.session.MUsuario, function (err, datos) {
                            req.session.MUsuario = datos[0];
                            res.redirect('/pantallaInicial');
                        });
                    }
                });
            } else {
                usuario.buscarUsu(con, req.body, function (err, datos) {
                    if(datos.length == 0){
                        usuario.actualizarUsu(con, req.session.MUsuario, req.body, function (err) {
                            if(!err) {
                                usuario.buscarUsu(con, req.body, function (err, datos) {
                                    req.session.MUsuario = datos[0];
                                    res.redirect('/pantallaInicial');
                                });
                            }
                        });
                    } else {
                        res.redirect('/pantallaInicial');
                    }
                });
            }
        }
    },
    mensajeriaP:function (req, res, next) {
        if(req.session.MUsuario == undefined || req.body.CedulaMed == undefined){
            res.redirect('/isPaciente');
        }else{
            medico.buscarCed(con, req.body.CedulaMed, function (err, data) {
                const Usuario = req.session.MUsuario;
                const Med = data[0];
                res.render('mensajeriaP',{
                    Usuario,
                    Med
                });
            });
        }
    },
    mensajeriaM:function (req, res, next) {
        if(req.session.MUsuario == undefined || req.body.IdPac == undefined){
            res.redirect('/isPaciente');
        }else{
            medico.buscarCed(con, req.body.IdPac, function (err, data) {
                const Usuario = req.session.MUsuario;
                const Med = data[0];
                res.render('mensajeriaP',{
                    Usuario,
                    Med
                });
            });
        }
    }
}