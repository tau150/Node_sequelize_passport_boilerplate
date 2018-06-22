"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "SUPER_ADMIN",
          description: "Puede cargar todo usuario y recurso",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "OPERADOR",
          description: "Puede cargar y consultar encuestadores y encuestas",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CONSULTA",
          description: "Solo consulta de recursos",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Roles", null, {});
  }
};
