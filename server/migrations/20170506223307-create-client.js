'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      registration_date: {
        type: Sequelize.DATEONLY
      },
      military: {
        type: Sequelize.BOOLEAN
      },
      misdemeanor: {
        type: Sequelize.BOOLEAN
      },
      misdemeanor_exp: {
        type: Sequelize.TEXT
      },
      felony: {
        type: Sequelize.BOOLEAN
      },
      felony_exp: {
        type: Sequelize.TEXT
      },
      avail_date: {
        type: Sequelize.DATEONLY
      },
      full_time: {
        type: Sequelize.BOOLEAN
      },
      part_time: {
        type: Sequelize.BOOLEAN
      },
      daysofweek: {
        type: Sequelize.STRING
      },
      hours: {
        type: Sequelize.STRING
      },
      inside: {
        type: Sequelize.BOOLEAN
      },
      outside: {
        type: Sequelize.BOOLEAN
      },
      geo_area: {
        type: Sequelize.STRING
      },
      work_exp: {
        type: Sequelize.BOOLEAN
      },
      benefits_prof: {
        type: Sequelize.BOOLEAN
      },
      benefits_exp: {
        type: Sequelize.TEXT
      },
      other_agency: {
        type: Sequelize.BOOLEAN
      },
      drivers_license: {
        type: Sequelize.BOOLEAN
      },
      car_access: {
        type: Sequelize.BOOLEAN
      },
      other_transport: {
        type: Sequelize.TEXT
      },
      pass_drug_screen: {
        type: Sequelize.BOOLEAN
      },
      medications: {
        type: Sequelize.TEXT
      },
      resume: {
        type: Sequelize.BOOLEAN
      },
      computer_access: {
        type: Sequelize.BOOLEAN
      },
      online_app_assistance: {
        type: Sequelize.BOOLEAN
      },
      paper_app_assistance: {
        type: Sequelize.BOOLEAN
      },
      barriers: {
        type: Sequelize.TEXT
      },
      goal: {
        type: Sequelize.TEXT
      },
      meeting_venue: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clients');
  }
};