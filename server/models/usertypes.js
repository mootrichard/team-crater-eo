'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTypes = sequelize.define('UserTypes', {
    type_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        UserTypes.hasMany(models.User);
      }
    }
  });
  return UserTypes;
};