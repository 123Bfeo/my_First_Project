module.exports = function (sequelize, dataTypes) {
    let alias = "Registro";
    let cols = {
        id_maquina: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        numero_traslado: {
            type: dataTypes.INTEGER
        },
        fecha_ingreso: {
            type: dataTypes.DATE
        },
        activo_maquina: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.STRING
        },
        estado_maquina: {
            type: dataTypes.STRING
        },
        numero_serviceDesk: {
            type: dataTypes.INTEGER
        },
        fecha_revision_maquina: {
            type: dataTypes.DATE
        },
        observaciones: {
            type: dataTypes.STRING
        },
        fecha_escalamiento_pro: {
            type: dataTypes.DATE
        },
        ticket_proveedor: {
            type: dataTypes.STRING
        },
        fecha_reparacion: {
            type: dataTypes.DATE
        },
        responsable_reporte: {
            type: dataTypes.STRING
        },
        responsable_reparacion: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "registro",
        timestamps: false,
    };

    let Registro = sequelize.define(alias, cols, config);
    return Registro;
};
