module.exports = (sequelize,DataTypes) => {

    let alias = "Speciality";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        category: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Speciality",
        timestamps: false
    }

    const Speciality = sequelize.define (alias,cols,config);

    Speciality.associate = function(models){
        Speciality.hasMany(models.Talent,{
            as: "talent",
            foreignKey: "id_Speciality",
            timestamps: false
        });
        Speciality.hasMany(models.JobOffer,{
            as: "joboffer",
            foreignKey: "id_Speciality",
            timestamps: false
        });
    }

    return Speciality;
}