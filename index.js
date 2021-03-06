require("dotenv").config();
const express = require("express");
const corsMiddleWare = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const eventsRouter = require("./routers/events");
const { PORT } = require("./config/constants");

// Create an express app
const app = express();

app.use(corsMiddleWare());

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/auth", authRouter);
app.use("/events", eventsRouter);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing artist that was added to req by the auth middleware
  const artist = req.artist;
  // don't send back the password hash
  delete artist.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    artistFoundWithToken: {
      ...artist.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
