const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const Artist = require("../models/").artist;
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

    const artist = await Artist.findOne({ where: { email } });

    if (!artist || !bcrypt.compareSync(password, artist.password)) {
      return res.status(400).send({
        message: "Artist with that email not found or password incorrect",
      });
    }

    delete artist.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ artistId: artist.id });
    return res.status(200).send({ token, ...artist.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name, isArtist } = req.body;
  if (!email || !password || !name) {
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
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.artist.dataValues["password"];
  res.status(200).send({ ...req.artist.dataValues });
});

module.exports = router;
