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
            defaultValue: null,
            allowNull: false
        },
        apellido:{
            type: dataTypes.STRING,
            defaultValue: null,
            allowNull: false
        },
    }
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    
    let Artistas = sequelize.define(alias, cols, config);

    Artistas.associate = function(models){
        Artistas.hasMany(models.Canciones, {
            as: "artistas",
            foreignKey: "id"
        });
    }
    
    return Artistas;
}