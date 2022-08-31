module.exports = function(sequelize, dataTypes){
    let alias = "Canciones";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo:{
            type: dataTypes.STRING,
            defaultValue: null
        },
        duracion:{
            type: dataTypes.INTEGER,
            defaultValue: null
        },
        created_at:{
            type: dataTypes.DATE,
            defaultValue: null
        },
        updated_at:{
            type: dataTypes.DATE,
            defaultValue: null
        },
        genero_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        album_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        artista_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }
    let config = {
        tableName: "canciones",
        timeStamps: false
    }
    let Canciones = sequelize.define(alias, cols, config);
    return Canciones
}