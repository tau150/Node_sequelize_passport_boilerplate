"use strict";
const bcrypt = require("bcryptjs");
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
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          password: bcrypt.hashSync(
            faker.internet.password(),
            bcrypt.genSaltSync(10)
          ),
          role_id: 1
        });
      }

      users.push({
        firstName: "santi",
        lastName: "nunez",
        email: "test@mail.com",
        password: bcrypt.hashSync("123", bcrypt.genSaltSync(10)),
        role_id: 1
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
