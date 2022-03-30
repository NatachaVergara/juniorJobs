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

    return Speciality;
}