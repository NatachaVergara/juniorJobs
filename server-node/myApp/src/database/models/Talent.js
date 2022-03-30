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
        },
        id_Education: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        }
}

    let config = {
        tableName: "Talent",
        timestamps: true
    }

    const Talent = sequelize.define (alias,cols,config);

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

    return Talent;
}