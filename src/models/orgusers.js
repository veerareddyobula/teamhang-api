'use strict';
module.exports = (sequelize, DataTypes) => {
  const orgUsers = sequelize.define('orgUsers', {
    userId: DataTypes.INTEGER,
    orgId: DataTypes.INTEGER,
    dateLastModified: DataTypes.DATE,
    dateOfCreation: DataTypes.DATE
  }, {});
  orgUsers.associate = function(models) {
    // associations can be defined here
  };
  return orgUsers;
};