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
          about:
            "Meau Hewitt grew up in Weesp and attended Vechtstede College there. Born: May 10, 2000. As a child she took singing and piano lessons from the age of five and sang along with the choir of Children for Children (2008-2011) for three years. She sang solos in the songs Snoepje (2010) and Jongenmeid (about a girl who is boyish; 2011). In the following years she was allowed to perform as a member of the (backing) choir of Babette Labeij at The Passion , All You Need Is Love and the finals of The Voice of Holland .",
          spotifyUrl: "2F3Mdh2idBVOiMTxXoxc10",

          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remme singer",
          email: "remme@gmail.com",
          password: bcrypt.hashSync("remme", SALT_ROUNDS),
          image:
            "https://partyflock.nl/images/artist/128041_1440x1440_586811/Remme.webp",
          about:
          "Remme (21) began writing music when he was 12 years old and has been working on his songs ever since, commuting between his hometown Eindhoven and Berlin, where his studio and record label (Universal) is located. His influences include Frank Ocean, Fleetwood Mac, Bruce Springsteen, but also Jeff Buckley and Justin Bieber. ",
          spotifyUrl: "2yqHVMUJy2Wxl7HVsp4Se5",
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Flemming singer",
          email: "flemming@gmail.com",
          password: bcrypt.hashSync("flemming", SALT_ROUNDS),
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQGuxEpurpuDHw/profile-displayphoto-shrink_200_200/0/1605053165099?e=1652918400&v=beta&t=4VqRh-N-aSL8bTpqxj4FhM9Vo_wnaPOjDEZ3Sx4iUSo",
          about:
            "Flemming Freddie Viguurs ( born 5 April 1996 in 's-Hertogenbosch ) is a Dutch singer-songwriter who performs under the name FLEMMING .In 2015, the singer's song Digital Age landed in the top ten of the iTunes chart. [5] A year later he participated in the online talent show GielsTalentsHacht van Giel Beelen .",
          spotifyUrl: "0YLlTW9rW7ZCy2cA2u3RYk",
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guido Spek actor/cabaret",
          email: "guido@gmail.com",
          password: bcrypt.hashSync("guido", SALT_ROUNDS),
          image:
            "https://m.media-amazon.com/images/M/MV5BNjcwODM2MTMwNF5BMl5BanBnXkFtZTgwMjkxNTY4OTE@._V1_.jpg",
          about:
            "Guido Spek was born on February 14, 1990 in Rotterdam, Zuid-Holland, Netherlands. He is an actor, known for Goede tijden, slechte tijden (1990), Flikken Maastricht (2007) and Station Urbantime (2008). See full bio »",
          spotifyUrl: null,
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chris Verlaan cabaret",
          email: "chris@gmail.com",
          password: bcrypt.hashSync("chris", SALT_ROUNDS),
          image:
            "https://cms-assets.nporadio.nl/npoRadio5/archief/_articleHeaderS/946045/chris-verlaan-cameretten-2018_-c-anne-van-zantwijk_klein.jpg",
          about:
            "Verlaan's style is original and at the same time traditional in form, with alternating hilarious songs and short stories dripping with self-mockery and cynicism” (de Volkskrant).The past year has been wonderfully organized for Chris. All the limitations gave him peace of mind",
          spotifyUrl: "3lVO4lwSviOqEgHwqhJFJ0",
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Remy Evers cabaret",
          email: "remy@gmail.com",
          password: bcrypt.hashSync("remy", SALT_ROUNDS),
          image:
            "https://images0.persgroep.net/rcs/a7cFSD2Wi3RPzAOdLgEvzJkp4ys/diocontent/161032610/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
          about:
            "Remy Evers is a Dutch comedian. His shows are imaginative, cheerful and somewhat absurd. After his studies at the Koningstheater Academy in Den Bosch, Remy won  the jury prize at the Cameretten Festival in 2019. In the final he settles with Tobi Kooiman and Henk Overdijk . The comedian is currently working hard on his first full-length solo program,  Just Remy .",
          spotifyUrl: null,
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carlo Tozzi painter",
          email: "carlo@gmail.com",
          password: bcrypt.hashSync("carlo", SALT_ROUNDS),
          image:
            "https://st-artamsterdam.com/wp-content/uploads/2021/02/Carlo-Tozzi.jpg",
          about:
            "Tozzi (30 October 1895 – 8 September 1979) was an Italian painter. He was awarded the Legion of Honour by the French government.Tozzi studied at the Accademia di Belle Arti di Bologna in Italy where he met Giorgio Morandi and Osvaldo Licini. He graduated in 1916.A catalogue raisonné of his paintings was published In 1988 by Giorgio Mondadori Editore and edited by Marilena Pasquali.",
          spotifyUrl: null,
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naone Dj",
          email: "naone@gmail.com",
          password: bcrypt.hashSync("naone", SALT_ROUNDS),
          image:
            "https://partyflock.nl/images/artist/130671_1080x1350_561945/Naone.webp",
          about:
            "Born in Seoul, currently based in Amsterdam In her DJ sets, Amsterdam-based Naone creates mutating sound worlds with cross-pollinations between cosmic trance, hypnotic techno and alient electronica. ",
          spotifyUrl: "1YFDpUPAsOO9nEMmLSI0AP",
          isArtist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ineffekt Dj",
          email: "ineffekt@gmail.com",
          password: bcrypt.hashSync("ineffek", SALT_ROUNDS),
          image:
            "https://3voor12.vpro.nl/.imaging/mte/3v12/opengraph/dam/3voor12/nieuws/2021/Ineffekt/ricky1.jpg/jcr:content/ricky1.jpg",
          about:
            "He was still a snot kid. Fifteen years old (six years too young!) and yet he managed to bluff his way into the Amsterdam club Shelter. A quarter to eleven in the evening Rick Bouwkamp alias Ineffekt entered that dark hole. Marcel Dettmann stood there all night, pounding, ramming, banging. The German DJ great played Berghain techno as it is meant to be: dark, loud. Overwhelming for the experienced rough-and-tumble, especially for a 15-year-old!",
          spotifyUrl: "4gjrK1MHgJnPCESuzMtWXg",
          isArtist: true,
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
