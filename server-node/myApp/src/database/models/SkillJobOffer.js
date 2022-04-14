module.exports = (sequelize,DataTypes) => {

    let alias = "SkillJobOffer";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        id_Skill: {                         //references: {
            type: DataTypes.INTEGER,        //model: Actor, // 'Actors' would also work
            foreingKey: true,               //key: 'id'}
            null: true, 
        },
        id_JobOffer: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        }
}

    let config = {
        tableName: "SkillJobOffer",
        timestamps: false
    }

    const SkillJobOffer = sequelize.define (alias,cols,config);

    return SkillJobOffer;
}