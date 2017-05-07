'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.CHKPASS
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.UserTypes, {
          onDelete: 'SET NULL'
        });
      }
    }
  });
  return User;
};