const { Router } = require("express");
const router = new Router();
const Events = require("../models").event;
const Images = require("../models").image;
const Tickets = require("../models").ticket;

router.get("/", async (req, res, next) => {
  try {
    const events = await Events.findAll({ include: [Tickets] });
    if (!events || events === 0) {
      return res.status(404).send({ message: "Events not found" });
    }
    console.log(events);
    res.status(200).send({
      events,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const getEvent = await Events.findByPk(id);
    if (!getEvent || getEvent.length === 0) {
      return res.status(404).send({ message: "event not found" });
    }
    res.status(200).send(getEvent);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
