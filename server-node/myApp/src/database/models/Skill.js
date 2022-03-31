module.exports = (sequelize,DataTypes) => {

    let alias = "Skill";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        name: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Skill",
        timestamps: false
    }

    const Skill = sequelize.define (alias,cols,config);

    Skill.associate = function(models){
        Skill.belongsToMany(models.Talent,{
            as: "talent",
            through: "SkillTalent",
            foreignKey: "id_Skill",
            otherKey: "id_Talent",
            timestamps: false
        });
        Skill.belongsToMany(models.JobOffer,{
            as: "joboffer",
            through: "SkillJobOffer",
            foreignKey: "id_Skill",
            otherKey: "id_JobOffer",
            timestamps: false
        });
    }

    return Skill;
}