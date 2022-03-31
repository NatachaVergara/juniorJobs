module.exports = (sequelize,DataTypes) => {

    let alias = "Seniority";

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
        tableName: "Seniority",
        timestamps: false
    }

    const Seniority = sequelize.define (alias,cols,config);

    Seniority.associate = function(models){
        Seniority.hasMany(models.Talent,{
            as: "talent",
            foreignKey: "Seniority_id",
            timestamps: false
        });
        Seniority.hasMany(models.JobOffer,{
            as: "joboffer",
            foreignKey: "Seniority_id",
            timestamps: false
        });
    }

    return Seniority;
}