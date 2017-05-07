'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    dob: { type: DataTypes.DATEONLY },
    gender: { type: DataTypes.STRING },
    race: { type: DataTypes.STRING },
    ssn: { type: DataTypes.INTEGER },
    email: { type: DataTypes.STRING },
    registration_date: { type: DataTypes.DATEONLY },
    military: { type: DataTypes.BOOLEAN },
    misdemeanor: { type: DataTypes.BOOLEAN },
    misdemeanor_exp: { type: DataTypes.TEXT },
    felony: { type: DataTypes.BOOLEAN },
    felony_exp: { type: DataTypes.TEXT },
    avail_date: { type: DataTypes.DATEONLY },
    full_time: { type: DataTypes.BOOLEAN },
    part_time: { type: DataTypes.BOOLEAN },
    daysofweek: { type: DataTypes.STRING },
    hours: { type: DataTypes.STRING },
    inside: { type: DataTypes.BOOLEAN },
    outside: { type: DataTypes.BOOLEAN },
    geo_area: { type: DataTypes.STRING },
    work_exp: { type: DataTypes.BOOLEAN, },
    benefits_prof: { type: DataTypes.BOOLEAN },
    benefits_exp: { type: DataTypes.TEXT },
    other_agency: { type: DataTypes.BOOLEAN },
    drivers_license: { type: DataTypes.BOOLEAN },
    car_access: { type: DataTypes.BOOLEAN },
    other_transport: { type: DataTypes.TEXT },
    pass_drug_screen: { type: DataTypes.BOOLEAN },
    medications: { type: DataTypes.TEXT },
    resume: { type: DataTypes.BOOLEAN },
    computer_access: { type: DataTypes.BOOLEAN },
    online_app_assistance: { type: DataTypes.BOOLEAN },
    paper_app_assistance: { type: DataTypes.BOOLEAN },
    barriers: { type: DataTypes.TEXT },
    goal: { type: DataTypes.TEXT },
    meeting_venue: { type: DataTypes.TEXT },
    notes: { type: DataTypes.TEXT },
    photo: { type: DataTypes.BLOB }
  }, {
    classMethods: {
      associate: (models) => {
        Client.hasMany(models.References);
        Client.hasMany(models.AlternateContact);
        Client.hasMany(models.EmploymentDetail);
        Client.hasMany(models.EducationDetail);
        Client.belongsTo(models.JobDeveloper, {
          onDelete: 'SET NULL'
        });
      },
    },
  });
  return Client;
};