module.exports = function(sequelize, dataTypes){
    let alias = "Canciones";

    let cols = {
        id:{
            type: dataTypes.TINYINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        titulo:{
            type: dataTypes.STRING,
            defaultValue: "null"
        },
        duracion:{
            type: dataTypes.INTEGER,
            defaultValue: "null"
        },
        created_at: {
            field: "created_at",
            type: dataTypes.DATE
        },
        updated_at: {
            field: "updated_at",
            type: dataTypes.DATE
        },
        genero_id:{
            type: dataTypes.TINYINT(11),
            allowNull: false
        },
        album_id:{
            type: dataTypes.TINYINT(11),
            allowNull: false
        },
        artista_id:{
            type: dataTypes.TINYINT(11),
            allowNull: false
        },
    }
    let config = {
        tableName: "canciones",
        timeStamps: false
    }
    let Canciones = sequelize.define(alias, cols, config);

    Canciones.associate = function(models){
        Canciones.belongsTo(models.Albumes, {
            as: "canciones",
            foreignKey: "album_id"
        });
        Canciones.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genero_id"
        });
        Canciones.belongsTo(models.Artistas, {
            as: "artistas",
            foreignKey: "artista_id"
        });
    }

    return Canciones;
}