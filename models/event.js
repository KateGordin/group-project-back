"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.belongsTo(models.artist, { foreignKey: "artistId" });
      event.hasMany(models.ticket, { foreignKey: "eventId" });
      event.hasMany(models.image, { foreignKey: "eventId" });
    }
  }
  event.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.STRING,
      place: DataTypes.STRING,
      mainImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
