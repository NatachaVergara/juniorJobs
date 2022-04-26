module.exports = (sequelize,DataTypes) => {

    let alias = "Education";

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
        tableName: "Education",
        timestamps: false
    }

    const Education = sequelize.define (alias,cols,config);

    Education.associate = function(models){
        Education.hasMany(models.Talent,{
            as: "talent",
            foreignKey: "id_Education",
            timestamps: false
        });
    }
    return Education;
}