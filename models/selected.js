module.exports=(sequelize, DataTypes)=>{
    const Selected =sequelize.define(
        "selected",
        {
            interestStock: {
                type: DataTypes.STRING(20),
                unique: true,
            },
            upperLimit: {
                type: DataTypes.STRING(20),
            },
            lowerLimit: {
                type: DataTypes.STRING(20),
            },
            holdStock: {
                type: DataTypes.STRING(20),
            },
        },
        {
            timestamps:true,
        },
        {
            charset:"utf8",
            collate:"utf8_general_ci",
        });
    return Selected;
}