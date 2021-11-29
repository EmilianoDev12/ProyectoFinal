module.exports = {
    registrarFich:function (conexion, IdTip, funcion) {
        conexion.query("INSERT INTO DFichaIdentifi (IdPac) VALUES (?)", [IdTip], funcion);
    },
    buscarFich:function (conexion, IdTip, funcion) {
        conexion.query("SELECT * FROM DFichaIdentifi WHERE IdPac = ?",[IdTip], funcion);
    },
    actualizarFich:function (conexion, IdTip, Data, funcion) {
        conexion.query("UPDATE DFichaIdentifi SET Nombres = ?, Apm = ?, App = ?, Sexo = ?, Dia = ?, Mes = ?, Ano = ?, Ocupacion = ?, Lateralidad = ?, Religion = ?, Nacionalidad = ?, TelefonoCel = ? WHERE IdPac = ?", [Data.Nombres, Data.Apm, Data.App, Data.Sexo, Data.Dia, Data.Mes, Data.Ano, Data.Ocupacion, Data.Lateralidad, Data.Religion, Data.Nacionalidad, Data.TelefonoCel,IdTip], funcion);
    },
    registrarAnt:function (conexion, IdTip, funcion) {
        conexion.query("INSERT INTO DAnte (IdPac) VALUES (?)", [IdTip], funcion);
    },
    buscarAnt:function (conexion, IdTip, funcion) {
        conexion.query("SELECT * from DAnte WHERE IdPac = ?", [IdTip], funcion);
    },
    actualizarAnt:function (conexion, IdTip, Data, funcion) {
        conexion.query("UPDATE DAnte SET FDia = ?, EDia = ?, FAr = ?, EAr = ?, FCar = ?, ECar = ?, FNeur = ?, ENeur = ?, FPsi = ?, EPsi = ?, FResp = ?, EResp = ?, FHep = ?, EHep = ?, FHip = ?, EHip = ?, FOtr = ?, EOtr = ?, FNeo = ?, ENeo = ? WHERE IdPac = ?", [Data.FDia,Data.EDia,Data.FAr,Data.EAr,Data.FCar,Data.ECar,Data.FNeur,Data.ENeur,Data.FPsi,Data.EPsi,Data.FResp,Data.EResp,Data.FHep,Data.EHep,Data.FHip,Data.EHip,Data.FOtr,Data.EOtr,Data.FNeo,Data.ENeo,IdTip], funcion);
    }

}