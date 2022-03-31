module.exports = (sequelize,DataTypes) => {

    let alias = "Remote";

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
        tableName: "Remote",
        timestamps: false
    }

    const Remote = sequelize.define (alias,cols,config);

    Remote.associate = function(models){
        Remote.hasMany(models.JobOffer,{
            as: "joboffer",
            foreignKey: "id_Remote",
            timestamps: false
        });
    }

    return Remote;
}