"use strict";
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define(
    "Role",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};
