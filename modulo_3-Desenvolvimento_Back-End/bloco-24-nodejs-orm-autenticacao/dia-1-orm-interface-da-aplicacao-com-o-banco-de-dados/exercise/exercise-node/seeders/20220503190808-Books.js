'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books',
      [{
        id: 1,
        title: 'Livro 1',
        author: 'Author 1',
        pageQuantity: 200,
        createdAt: new Date("2022-01-28T13:23:32.514Z"),
        updatedAt: new Date("2022-01-28T13:23:32.514Z"),
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};