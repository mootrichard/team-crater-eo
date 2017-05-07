'use strict';
module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define('Jobs', {
    job_title: DataTypes.STRING,
    job_duties: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Jobs;
};