'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.UserType, { foreignKey: 'userTypeId' });
      }
    }
  });
  return User;
};