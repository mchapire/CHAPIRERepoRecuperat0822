module.exports = function(sequelize, dataTypes){
    let alias = "Generos";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        name:{
            type: dataTypes.STRING
        },
    }
    let config = {
        tableName: "generos",
        timeStamps: true
    }
    let Generos = sequelize.define(alias, cols, config);

    Generos.associate = function(models){
        Generos.hasMany(models.Canciones, {
            as: "generos",
            foreignKey: "genero_id"
        });
    }

    return Generos;
}