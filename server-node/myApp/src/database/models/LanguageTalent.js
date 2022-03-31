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

    LanguageTalent.associate = function(models){
        LanguageTalent.belongsTo(models.Level,{
            as: "level",
            foreignKey: "id_Level",
            timestamps: false
        });
    }

    return LanguageTalent;
}