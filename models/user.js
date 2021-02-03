module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
      "user",
      {
        userName:{
          type: DataTypes.STRING(40),
          allowNull:false,
        },
        userEmail:{
          type: DataTypes.STRING(40),
          allowNull:false,
          unique: true,
        },
        userPassword:{
          type: DataTypes.STRING(100),
          allowNull:false,
        },
        investType:{
          type: DataTypes.INTEGER(3),
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
  /*User.associate = function(models){

  }*/
  return User;
}