'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street_num: { type: DataTypes.STRING },
    street_name: { type: DataTypes.STRING },
    apt_num: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    zip: { type: DataTypes.STRING },
    po_box: { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: (models) => {
        Address.hasOne(models.Client);
        Address.hasOne(models.EducationDetail);
        Address.hasOne(models.AlternateContact);
      }
    }
  });
  return Address;
};