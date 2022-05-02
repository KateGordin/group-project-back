"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      image.belongsTo(models.event, { foreignKey: "eventId" });
    }
  }
  image.init(
    {
      image: {type: DataTypes.STRING(1000)},
    },
    {
      sequelize,
      modelName: "image", 
    }
  );
  return image;
};
