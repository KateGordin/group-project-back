"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tickets",
      [
        {
          price: "50",
          numberAvailable: "100",
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: "50",
          numberAvailable: "100",
          eventId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tickets", null, {});
  },
};
