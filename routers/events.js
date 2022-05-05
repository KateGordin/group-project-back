const { Router } = require("express");
const auth = require("../auth/middleware");
const secrets = require("../config/secrets");
const router = new Router();
const Events = require("../models").event;
const Images = require("../models").image;
const Tickets = require("../models").ticket;
const Artists = require("../models").artist;
const stripe = require("stripe")(secrets.stripe.secret);

//All event page
router.get("/", async (req, res, next) => {
  try {
    const events = await Events.findAll({ include: [Tickets, Artists] });
    if (!events || events === 0) {
      return res.status(404).send({ message: "Events not found" });
    }
    //console.log(events);
    res.status(200).send({
      events,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Details page

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const getEvent = await Events.findByPk(id, { include: [Images, Tickets] });

    if (!getEvent || getEvent.length === 0) {
      return res.status(404).send({ message: "event not found" });
    }
    res.status(200).send(getEvent);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/buyticket", async (req, res, next) => {
  try {
    const { ticketId, numberOfTickets } = req.body;
    const ticket = await Tickets.findByPk(ticketId);
    console.log("ticket", { ticketId, numberOfTickets });
    if (!ticket) {
      return res.status(400).send("This ticket does not exist");
    }

    if (ticket.numberAvailable < 1) {
      return res.status(400).send("Oops tickets are sold out");
    }

    if (numberOfTickets < 1 || numberOfTickets > ticket.numberAvailable) {
      return res.status(400).send("Wrong number of tickets");
    }

    await stripe.charges.create({
      amount: ticket.price * numberOfTickets,
      currency: "eur",
      description: `ticket for event ${ticket.eventId}`,
      source: "pm_1KvzDiFmQ75pA8Sy9q7clZHo",
    });

    const updatedTicket = await ticket.update({
      numberAvailable: ticket.numberAvailable - numberOfTickets,
    });

    res.send(updatedTicket);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// update artist details
router.patch("/:id", auth, async (req, res) => {
  const artist = await Artists.findByPk(req.params.id);

  if (artist.email !== req.artist.email) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this profile" });
  }
  const { name, email, image, about } = req.body;

  const result = await artist.update({ name, email, image, about });

  return res.status(200).send(result);
});

//post event
router.post("/newEvent", auth, async (req, res) => {
  const {
    title,
    description,
    mainImage,
    date,
    address,
    images,
    seat,
    ticketPrice,
  } = req.body;

  if (!title) {
    return res.status(400).send({ message: "A product must have a title" });
  }

  if (!mainImage) {
    return res
      .status(400)
      .send({ message: "A product must have a main image" });
  }

  const newEvent = await Events.create({
    title,
    description,
    mainImage,
    date,
    address,
    artistId: req.artist.id,
    latitude: "52.083187818037594",
    longitude: "5.626321682555803",
  });

  const imagesWithEventId = images
    .filter((image) => image !== "")
    .map((image) => ({
      image: image,
      eventId: newEvent?.id,
    }));

  const newImages = await Images.bulkCreate(imagesWithEventId);

  const newTicket = await Tickets.create({
    price: ticketPrice,
    numberAvailable: seat,
    eventId: newEvent?.id,
  });

  return res.status(201).send({
    message: "Event created",
    event: {
      ...newEvent.dataValues,
      images: newImages,
      tickets: newTicket,
    },
  });
});

//delete events
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const eventToDelete = await Events.findByPk(parseInt(id));
    //console.log("event to delete", eventToDelete);

    if (!eventToDelete) {
      return res.status(404).send("no event found");
    }

    await eventToDelete.destroy();

    res.send({
      message: `deleted product with id ${id}`,
      // imageDeleted,
    });
  } catch (e) {
    res.status(500).send({ error: e });
    console.log(e.message);
    next(e);
  }
});

////get all artist details
router.get("/artist/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const artist = await Artists.findByPk(id);
    if (!artist || artist === 0) {
      return res.status(404).send({ message: "Artist not found" });
    }
    //console.log(artist);
    res.status(200).send({
      artist,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;
