const User = require('../../modeloUser/User')
const db = require("../../database/models")
const controllers = {
    home: (req, res) => {
        res.render("home");
    },
    // responde con la vista del usuario
    login: (req, res) => {
        res.render("loginUser");
    },
    // encargado manipular la inforcion enviada desde el formulario login
    processLogin: (req, res) => {
        let userToLogin = User.searchUserEmail(req.body.email);
        if (userToLogin) {
            return res.redirect("registroMaquina");
        }
        return res.render("loginUser")
    },
    registerMaquina: (req, res) => {
        res.render("registroMaquinas");
    },
    processRegisterMaquina: (req, res) => {
        db.Registro.create({
            numero_traslado: req.body.n_traslado,
            fecha_ingreso: req.body.f_ingreso,
            activo_maquina: req.body.activo_m,
            descripcion: req.body.descripcion,
            estado_maquina: req.body.estado,
            numero_serviceDesk: req.body.serviceDesk,
            fecha_revision_maquina: req.body.f_revision,
            observaciones: req.body.observacion,
            fecha_escalamiento_pro: req.body.f_escalamiento,
            ticket_proveedor: req.body.ticket,
            fecha_reparacion: req.body.f_reparaciones,
            responsable_reporte: req.body.R_reporte,
            responsable_reparacion: req.body.R_reparaciones
        });
        res.send("se guardo el registro");
    }
}
module.exports = controllers;