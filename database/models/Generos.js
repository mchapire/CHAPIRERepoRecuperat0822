module.exports = function(sequelize, dataTypes){
    let alias = "Generos";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING,
            allowNull: true
        },
    }
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    
    let Generos = sequelize.define(alias, cols, config);

     Generos.associate = function(models){
         Generos.hasMany(models.Canciones, {
             as: "generos",
             foreignKey: "genero_id",
         });
    }

    return Generos;
}