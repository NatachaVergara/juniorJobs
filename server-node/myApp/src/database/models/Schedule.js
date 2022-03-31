module.exports = (sequelize,DataTypes) => {

    let alias = "Schedule";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        schedule: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Schedule",
        timestamps: false
    }

    const Schedule = sequelize.define (alias,cols,config);

    Schedule.associate = function(models){
        Schedule.hasMany(models.JobOffer,{
            as: "joboffer",
            foreignKey: "id_Schedule",
            timestamps: false
        });
    }

    return Schedule;
}