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
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING(1000), allowNull: false },
      date: { type: DataTypes.STRING, allowNull: false },
      address:{type:DataTypes:STRINGS,allowNull:false}
       latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      mainImage: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
