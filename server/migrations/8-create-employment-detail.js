'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmploymentDetail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organization: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      job_duties: {
        type: Sequelize.TEXT
      },
      pay: {
        type: Sequelize.STRING
      },
      leaving_reason: {
        type: Sequelize.TEXT
      },
      start: {
        type: Sequelize.DATEONLY
      },
      end: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      clientId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Client',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmploymentDetail');
  }
};