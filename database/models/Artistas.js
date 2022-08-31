module.exports = function(sequelize, dataTypes){
    let alias = "Artistas";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        apellido:{
            type: dataTypes.STRING,
            defaultValue: null
        },
    }
    let config = {
        tableName: "artistas",
        timeStamps: false
    }
    let Artistas = sequelize.define(alias, cols, config);
    return Artistas;
}