'use strict';
module.exports = (sequelize, DataTypes) => {
  const References = sequelize.define('References', {
    first_name: { type: DataTypes.STRING, },
    last_name: { type: DataTypes.STRING, },
    phone: { type: DataTypes.INTEGER, },
    years_known: { type: DataTypes.INTEGER, },
    notes: { type: DataTypes.TEXT, },
    business: { type: DataTypes.BOOLEAN, },
    personal: { type: DataTypes.BOOLEAN }
  }, {
    classMethods: {
      associate: (models) => {
        References.hasOne(models.Address);
        References.belongsTo(models.Client, {
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return References;
};