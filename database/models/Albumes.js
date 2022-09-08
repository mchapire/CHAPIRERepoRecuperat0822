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
            defaultValue: null,
            allowNull: false
        },
        duracion:{
            type: dataTypes.INTEGER,
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
    
    let Albumes = sequelize.define(alias, cols, config);

    Albumes.associate = function(models){
        Albumes.hasMany(models.Canciones, {
            as: "albumes",
            foreignKey: "id"
        });
    }
    
    return Albumes;
}

