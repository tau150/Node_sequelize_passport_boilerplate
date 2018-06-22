"use strict";

const faker = require("faker");

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

    let users = [];

    const seeder = () => {
      for (var i = 0; i <= 50; i++) {
        users.push({
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }

      users.push({
        name: "santi",
        surname: "nunez",
        email: "tau150@hotmail.com",
        password: "123",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    };

    seeder();

    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Users", null, {});
  }
};
