"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("events", "artistId", {
      type: Sequelize.INTEGER,
      references: {
        model: "artists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("tickets", "eventId", {
      type: Sequelize.INTEGER,
      references: {
        model: "events",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("images", "eventId", {
      type: Sequelize.INTEGER,
      references: {
        model: "events",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("events", "artistId");
    await queryInterface.removeColumn("tickets", "eventId");
    await queryInterface.removeColumn("images", "eventId");
  },
};
