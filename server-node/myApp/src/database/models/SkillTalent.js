module.exports = (sequelize,DataTypes) => {

    let alias = "SkillTalent";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        id_Skill: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Talent: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        }
}

    let config = {
        tableName: "SkillTalent",
        timestamps: false
    }

    const SkillTalent = sequelize.define (alias,cols,config);

    return SkillTalent;
}