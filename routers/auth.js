const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const Artist = require("../models/").artist;
const Event = require("../models/").event;
const Ticket = require("../models").ticket;
const Image = require("../models").image;
const { SALT_ROUNDS } = require("../config/constants");
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    // const artist = await Artist.findOne({ where: { email } });

    // const artist = await Artist.findOne({
    //   where: { email },
    //   include: {
    //     model: Event,
    //   },
    // });

    const artist = await Artist.findOne({
      where: { email },
      include: {
        model: Event,
        include: [{ model: Image }, { model: Ticket }],
      },
    });

    if (!artist || !bcrypt.compareSync(password, artist.password)) {
      return res.status(400).send({
        message: "Artist with that email not found or password incorrect",
      });
    }

    delete artist.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ artistId: artist.id });

    // return res.status(200).send({ token, ...artist.dataValues });

    return res.status(200).send({
      token,
      id: artist.id,
      name: artist.name,
      email: artist.email,
      image: artist.image,
      isArtist: artist.isArtist,
      event: artist.events, // Just select the first space
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//signup
router.post("/signup", async (req, res) => {
  const { email, password, name, isArtist } = req.body;
  if (!email || !password || !name || isArtist) {
    return res.status(400).send("Please provide an email, password and a name");
  }
  try {
    const newArtist = await Artist.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      isArtist,
      image:
        "https://www.royalunibrew.com/wp-content/uploads/2021/07/blank-profile-picture-973460_640.png",
    });

    delete newArtist.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ artistId: newArtist.id });

    res.status(201).json({ token, ...newArtist.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the artists email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash

  const artist = await Artist.findOne({
    where: { id: req.artist.id },
    include: {
      model: Event,
      include: [{ model: Image }, { model: Ticket }],
    },
  });
  delete req.artist.dataValues["password"];

  return res.status(200).send({
    id: artist.id,
    name: artist.name,
    email: artist.email,
    image: artist.image,
    isArtist: artist.isArtist,
    event: artist.events,
  });
});
module.exports = router;
