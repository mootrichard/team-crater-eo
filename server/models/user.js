'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    instanceMethods:{
      authenticate: function(password) {
        return bcrypt.compare(password, this.password);
      }
    },
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.UserType, { foreignKey: 'userTypeId' });
      }
    }
  });
  return User;
};