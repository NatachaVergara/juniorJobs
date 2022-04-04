const Sequelize = require('sequelize');

module.exports = (sequelize,DataTypes) => {

    let alias = "JobOffer";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        title: {
            type: DataTypes.STRING,
            null: false
        },
        description: {
            type: DataTypes.STRING,
            null: false
        },
        location: {
            type: DataTypes.STRING,
            null: false
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
        id_Recruiter: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Schedule: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Remote: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Talent: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Seniority: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Experience: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Speciality: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        }
}

    let config = {
        tableName: "JobOffer",
        timestamps: true,
        paranoid: true,
        createdAt: "createDate",
        deletedAt: "removeDate",
        updatedAt: "editDate"
    }

    const JobOffer = sequelize.define (alias,cols,config);

    JobOffer.associate = function(models){
        JobOffer.belongsTo(models.Schedule,{
            as: "schedule",
            foreignKey: "id_Schedule",
            timestamps: false
        });
        JobOffer.belongsTo(models.Remote,{
            as: "remote",
            foreignKey: "id_Remote",
            timestamps: false
        });
        JobOffer.belongsTo(models.Seniority,{
            as: "seniority",
            foreignKey: "id_Seniority",
            timestamps: false
        });
        JobOffer.belongsTo(models.Experience,{
            as: "experience",
            foreignKey: "id_Experience",
            timestamps: false
        });
        JobOffer.belongsTo(models.Speciality,{
            as: "speciality",
            foreignKey: "id_Speciality",
            timestamps: false
        });
        JobOffer.belongsToMany(models.Skill,{
            as: "skill",
            through: "SkillJobOffer",
            foreignKey: "id_JobOffer",
            otherKey: "id_Skill",
            timestamps: false
        });
        JobOffer.belongsToMany(models.Language,{
            as: "language",
            through: "LanguageJobOffer",
            foreignKey: "id_JobOffer",
            otherKey: "id_Language",
            timestamps: false
        });
    }

    return JobOffer;
}