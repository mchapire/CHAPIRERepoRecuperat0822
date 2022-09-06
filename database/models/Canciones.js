module.exports = function(sequelize, dataTypes){
    let alias = "Canciones";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
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
        // createdAt: {
        //     field: "created_at",
        //     type: dataTypes.DATE
        // },
        // updatedAt: {
        //     field: "updated_at",
        //     type: dataTypes.DATE
        // },
        genero_id:{
            type: dataTypes.TINYINT(11),
            allowNull: true
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    let Canciones = sequelize.define(alias, cols, config);

    Canciones.associate = function(models){
        Canciones.belongsTo(models.Albumes, {
            as: "albumes",
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