"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ticket.belongsTo(models.events, { foreignKey: "eventId" });
    }
  }
  ticket.init(
    {
      type: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      numberAvailable: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ticket",
    }
  );
  return ticket;
};
