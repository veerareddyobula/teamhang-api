'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define('organization', {
    name: DataTypes.STRING,
    contactUserId: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    dateOfCreation: DataTypes.DATE,
    dateLastModified: DataTypes.DATE
  }, {});
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};