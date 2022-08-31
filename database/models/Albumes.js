module.exports = function(sequelize, dataTypes){
    let alias = "Albumes";

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
        duracion:{
            type: dataTypes.INTEGER,
            defaultValue: null
        },
    }
    let config = {
        tableName: "albumes",
        timeStamps: false
    }
    let Albumes = sequelize.define(alias, cols, config);
    return Albumes;
}