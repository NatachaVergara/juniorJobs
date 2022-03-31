module.exports = (sequelize,DataTypes) => {

    let alias = "LanguageJobOffer";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        id_Language: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_JobOffer: {
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
        tableName: "LanguageJobOffer",
        timestamps: false
    }

    const LanguageJobOffer = sequelize.define (alias,cols,config);

    LanguageJobOffer.associate = function(models){
        LanguageJobOffer.belongsTo(models.Level,{
            as: "level",
            foreignKey: "id_Level",
            timestamps: false
        });
    }

    return LanguageJobOffer;
}