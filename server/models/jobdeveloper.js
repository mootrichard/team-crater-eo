'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobDeveloper = sequelize.define('JobDeveloper', {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.INT }
  }, {
    classMethods: {
      associate: (models) => {
        JobDeveloper.hasMany(models.Clients);
      },
    }
  });
  return JobDeveloper;
};