'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:"bezel968",
        capacity:200,
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        modelNumber:"bezel96",
        capacity:960,
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        modelNumber:"bezeltrubuland",
        capacity:205,
        createdAt: new Date(),
        updatedAt: new Date()  
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes',{[Op.or]:[{modelNumber:"bezel968"},{modelNumber:"bezel96"},{modelNumber:"bezeltrubuland"}]},{})
  }
};
