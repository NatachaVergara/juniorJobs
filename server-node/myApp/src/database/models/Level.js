module.exports = (sequelize,DataTypes) => {

    let alias = "Level";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        level: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Level",
        timestamps: false
    }

    const Level = sequelize.define (alias,cols,config);

    Level.associate = function(models){
        Level.hasMany(models.LanguageTalent,{
            as: "languagetalent",
            foreignKey: "id_Level",
            timestamps: false
        });
        Level.hasMany(models.LanguageJobOffer,{
            as: "languagejoboffer",
            foreignKey: "id_Level",
            timestamps: false
        });
        // Talent.belongsToMany(models.Personaje,{
        //     as: "talent",
        //     through: "personajePelicula",
        //     foreignKey: "Pelicula_id",
        //     otherKey: "Personaje_id",
        //     timestamps: false
        // });
    }

    return Level;
}