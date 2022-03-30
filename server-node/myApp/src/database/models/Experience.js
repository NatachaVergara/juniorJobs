module.exports = (sequelize,DataTypes) => {

    let alias = "Experience";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        period: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Experience",
        timestamps: false
    }

    const Experience = sequelize.define (alias,cols,config);

    // Talent.associate = function(models){
    //     Talent.belongsTo(models.Genero,{
    //         as: "generos",
    //         foreignKey: "Genero_id",
    //         timestamps: false
    //     });
    //     Talent.belongsToMany(models.Personaje,{
    //         as: "talent",
    //         through: "personajePelicula",
    //         foreignKey: "Pelicula_id",
    //         otherKey: "Personaje_id",
    //         timestamps: false
    //     });
    // }

    return Experience;
}