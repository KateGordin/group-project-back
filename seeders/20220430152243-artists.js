"use strict";
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "artists",
      [
        {
          name: "Meau singer",
          email: "meau@gmail.com",
          password: bcrypt.hashSync("meau", SALT_ROUNDS),
          image:
            "https://i.scdn.co/image/ab6761610000e5ebfa8d55b16d8b17db687bb0af",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remme singer",
          email: "remme@gmail.com",
          password: bcrypt.hashSync("remme", SALT_ROUNDS),
          image:
            "https://partyflock.nl/images/artist/128041_1440x1440_586811/Remme.webp",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Flemming singer",
          email: "flemming@gmail.com",
          password: bcrypt.hashSync("flemming", SALT_ROUNDS),
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQGuxEpurpuDHw/profile-displayphoto-shrink_200_200/0/1605053165099?e=1652918400&v=beta&t=4VqRh-N-aSL8bTpqxj4FhM9Vo_wnaPOjDEZ3Sx4iUSo",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guido Spek actor/cabaret",
          email: "guido@gmail.com",
          password: bcrypt.hashSync("guido", SALT_ROUNDS),
          image:
            "https://m.media-amazon.com/images/M/MV5BNjcwODM2MTMwNF5BMl5BanBnXkFtZTgwMjkxNTY4OTE@._V1_.jpg",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chris Verlaan cabaret",
          email: "chris@gmail.com",
          password: bcrypt.hashSync("chris", SALT_ROUNDS),
          image:
            "https://cms-assets.nporadio.nl/npoRadio5/archief/_articleHeaderS/946045/chris-verlaan-cameretten-2018_-c-anne-van-zantwijk_klein.jpg",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remy Evers cabaret",
          email: "remy@gmail.com",
          password: bcrypt.hashSync("remy", SALT_ROUNDS),
          image:
            "https://images0.persgroep.net/rcs/a7cFSD2Wi3RPzAOdLgEvzJkp4ys/diocontent/161032610/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlo Tozzi painter",
          email: "carlo@gmail.com",
          password: bcrypt.hashSync("carlo", SALT_ROUNDS),
          image:
            "https://st-artamsterdam.com/wp-content/uploads/2021/02/Carlo-Tozzi.jpg",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naone Dj",
          email: "naone@gmail.com",
          password: bcrypt.hashSync("naone", SALT_ROUNDS),
          image:
            "https://partyflock.nl/images/artist/130671_1080x1350_561945/Naone.webp",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ineffekt Dj",
          email: "ineffekt@gmail.com",
          password: bcrypt.hashSync("ineffek", SALT_ROUNDS),
          image:
            "https://3voor12.vpro.nl/.imaging/mte/3v12/opengraph/dam/3voor12/nieuws/2021/Ineffekt/ricky1.jpg/jcr:content/ricky1.jpg",
            isArtist:true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("artists", null, {});
  },
};
