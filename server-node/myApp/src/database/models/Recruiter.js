module.exports = (sequelize,DataTypes) => {

    let alias = "Recruiter";

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
        company: {
            type: DataTypes.STRING,
            null: false
        },
        image: {
            type: DataTypes.STRING,
            null: true
        },
        url: {
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
        }
}

    let config = {
        tableName: "Recruiter",
        timestamps: true
    }

    const Recruiter = sequelize.define (alias,cols,config);

    Recruiter.associate = function(models){
        Recruiter.hasMany(models.JobOffer,{
            as: "joboffer",
            foreignKey: "id_Recruiter",
            timestamps: false
        });
    }

    return Recruiter;
}