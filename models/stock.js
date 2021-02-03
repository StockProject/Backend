module.exports = (sequelize, DataTypes)=>{
    const Stock = sequelize.define(
        "stock",
        {
            stockName:{
                type:DataTypes.STRING(40),
                allowNull:false,
                unique:true,
            },
            stockPrice:{
                type:DataTypes.STRING(40),
            },
            stockOpen:{
                type:DataTypes.STRING(40),
            },
            ROF:{
                type:DataTypes.STRING(40),
            },
            amountTransaction:{
                type:DataTypes.STRING(40),
            },
            stockHigh: {
                type:DataTypes.STRING(40),
            },
            stockLow:{
                type:DataTypes.STRING(40),
            },
            interestStatus:{
                type:DataTypes.INTEGER(3),
            },
        },
        {
            timestamps:true,
        },
        {
            charset:"utf8",
            collate:"utf8_general_ci",
        }
    );

    return Stock;
}