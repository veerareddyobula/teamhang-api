"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.TEXT,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.STRING,
      dateOfCreation: DataTypes.DATE,
      dateLastModified: DataTypes.DATE
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
