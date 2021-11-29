module.exports = {
    buscarMed:function (conexion, datos, funcion) {
        conexion.query("SELECT * FROM MMedico WHERE SexoMed = ?", [datos.SexoMed] , funcion);
    },
    buscarCed:function (conexion, IdTip, funcion) {
        conexion.query("SELECT * from MUsuario where IdTip = ?", [IdTip], funcion);
    }
}