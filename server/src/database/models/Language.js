module.exports = (sequelize,DataTypes) => {

    let alias = "Language";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        language: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Language",
        timestamps: false
    }

    const Language = sequelize.define (alias,cols,config);

    Language.associate = function(models){
        Language.belongsToMany(models.Talent,{
            as: "talent",
            through: "LanguageTalent",
            foreignKey: "id_Language",
            otherKey: "id_Talent",
            timestamps: false
        });
        Language.belongsToMany(models.JobOffer,{
            as: "joboffer",
            through: "LanguageJobOffer",
            foreignKey: "id_Language",
            otherKey: "id_JobOffer",
            timestamps: false
        });
    }

    return Language;
}