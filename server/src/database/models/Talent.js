const Sequelize = require('sequelize');

module.exports = (sequelize,DataTypes) => {

    let alias = "Talent";

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
        },
        lastName: {
            type: DataTypes.STRING,
            null: false
        },
        email: {
            type: DataTypes.STRING,
            null: false
        },
        password: {
            type: DataTypes.STRING,
            null: false
        },
        birthdate: {
            type: DataTypes.DATE,
            null: false
        },
        image: {
            type: DataTypes.STRING,
            null: true
        },
        repository: {
            type: DataTypes.STRING,
            null: true
        },
        url: {
            type: DataTypes.STRING,
            null: true
        },
        profile: {
            type: DataTypes.STRING,
            null: true
        },
        phone: {
            type: DataTypes.STRING,
            null: true
        },
        createDate: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            null: false,
        },
        editDate: {
            type: 'TIMESTAMP',
            null: true,
        },
        removeDate: {
            type: 'TIMESTAMP',
            null: true,
        },
        id_Seniority: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: false,
        },
        id_Experience: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: false,
        },
        id_Speciality: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: false,
        },
        id_Education: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: false,
        }
}

    let config = {
        tableName: "Talent",
        timestamps: true,
        paranoid: true,
        createdAt: "createDate",
        deletedAt: "removeDate",
        updatedAt: "editDate"
    }

    const Talent = sequelize.define (alias,cols,config);

    Talent.associate = function(models){
        Talent.belongsTo(models.Seniority,{
            as: "seniority",
            foreignKey: "id_Seniority",
            timestamps: false
        });
        Talent.belongsTo(models.Experience,{
            as: "experience",
            foreignKey: "id_Experience",
            timestamps: false
        });
        Talent.belongsTo(models.Speciality,{
            as: "speciality",
            foreignKey: "id_Speciality",
            timestamps: false
        });
        Talent.belongsTo(models.Education,{
            as: "education",
            foreignKey: "id_Education",
            timestamps: false
        });
        Talent.belongsToMany(models.Skill,{
            as: "skill",
            through: "SkillTalent",
            foreignKey: "id_Talent",
            otherKey: "id_Skill",
            timestamps: false
        });
        Talent.belongsToMany(models.Language,{
            as: "language",
            through: "LanguageTalent",
            foreignKey: "id_Talent",
            otherKey: "id_Language",
            timestamps: false
        });
        Talent.belongsToMany(models.Recruiter,{
            as: "recruiter",
            through: "JobOffer",
            foreignKey: "id_Talent",
            otherKey: "id_Recruiter",
            timestamps: true
        });
    }

    return Talent;
}