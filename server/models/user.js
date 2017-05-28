'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
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