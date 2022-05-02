const { Router } = require("express");
const router = new Router();
const Events = require("../models").event;
const Images = require("../models").image;

router.get("/", async (req, res, next) => {
  try {
    const events = await Events.findAll();
    if (!events || events === 0) {
      return res.status(404).send({ message: "experience not found" });
    }
    res.status(200).send({
      events,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
