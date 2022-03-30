module.exports = (sequelize,DataTypes) => {

    let alias = "LanguageTalent";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        id_Talent: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Language: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Level: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        }
}

    let config = {
        tableName: "LanguageTalent",
        timestamps: false
    }

    const LanguageTalent = sequelize.define (alias,cols,config);

    // Talent.associate = function(models){
    //     Talent.belongsTo(models.Genero,{
    //         as: "generos",
    //         foreignKey: "Genero_id",
    //         timestamps: false
    //     });
    //     Talent.belongsToMany(models.Personaje,{
    //         as: "talent",
    //         through: "personajePelicula",
    //         foreignKey: "Pelicula_id",
    //         otherKey: "Personaje_id",
    //         timestamps: false
    //     });
    // }

    return LanguageTalent;
}