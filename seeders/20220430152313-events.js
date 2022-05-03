"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Meau in concert",
          description:
            "Meau will perform at the beutiful Caprera Theater of Bloomendal. ",
          date: "21/05/2022",
          address:'Hoge Duin en Daalseweg 2, 2061 AG Bloemendaal',
           latitude: '52.411104168319035',
      longitude: ' 4.608270269479692',
          mainImage:
            "https://live.staticflickr.com/65535/51923552561_55634b8570.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 1,
        },
        {
          title: "Meau in concert",
          description:
            "Meau will perform her new album at the Massilo Rotterdam. ",
          date: "18/11/2022",
          address:'Maashaven Zuidzijde 1-2, 3081 AE Rotterdam',
           latitude: '51.89753070014207',
      longitude: '4.493916126886211',
          mainImage:
            "https://live.staticflickr.com/65535/51923552561_55634b8570.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 1,
        },
        {
          title: "Vrienden van Amstel Life",
          description: "Flamming will perform at Ahoy of Rotterdam. ",
          date: "09/05/2022",
          address:'Ahoyweg 10, 3084 BA Rotterdam',
           latitude: '51.881935656960636',
      longitude: '4.486626384557234',
          mainImage:
            "https://www.talenthubbrabant.nl/cache/3636.3636/3636-s1920x1080.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 3,
        },
        {
          title: "The Best of de Amsterdamse Zomer",
          description: "Flamming will perform at Olimpisch Stadion Amsterdam. ",
          date: "02/07/2022",
          
          address:'Olympisch Stadion 2, 1076 DE Amsterdam',
           latitude: '52.34340657070258',
      longitude: '4.8541404269052055',
          mainImage:
            "https://www.talenthubbrabant.nl/cache/3636.3636/3636-s1920x1080.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 3,
        },
        {
          title: "PinkPop Festival",
          description:
            "Remme will perform at the PinkPop festival with other great singers at the Megaland Landgraaf. ",
          date: "17/05/2022",
         address:'Hofstraat 13-15, 6372 XC Landgraaf',
           latitude: '50.88137230064099',
      longitude: '6.023671451173183',
          mainImage:
            "https://www.pinkpop.nl/2022/wp-content/uploads/2019/11/celebration-show_pp19-28102101-1920x860.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 2,
        },
        {
          title: "Yes in Backyard",
          description:
            "Remme will perform with other great singers in Alkmaar. ",
          date: "01/06/2022",
          address:'Laat 27 ,1811 EB ALKMAAR',
           latitude: '52.628879402120404',
      longitude: '4.751368401108722',
          mainImage:
            "https://cdn-az.allevents.in/events8/banners/8594821013b267a136b5d9fd2c3d389a9b6214d87ec94bde6278efea138da196-rimg-w960-h540-gmir.jpg?v=1650905291",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 2,
        },
        {
          title: "Guido Spek | Gelooft niet álles wat op internet staat",
          description:
            "The famous actor is going to play his first cabaret show at the Theater De Poorterij ",
          date: "12/09/2022",
          
          address:'Nieuwstraat 2, 5301 EW Zaltbommel',
           latitude: '51.81145190791198',
      longitude: '5.250464436673217',
          mainImage:
            "https://www.musicaljournaal.nl/mj_nieuw/wp-content/uploads/2016/01/wp-1452624009115.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 4,
        },
        {
          title: "Guido Spek | Gelooft niet álles wat op internet staat",
          description: "Cabaret show at the Theater de Omval in Diemen",
          date: "01/11/2022",
          address:'Ouddiemerlaan 104, 1111 HL Diemen',
           latitude: '52.34211356292824',
      longitude: '4.964665696218367',
          mainImage:
            "https://www.musicaljournaal.nl/mj_nieuw/wp-content/uploads/2016/01/wp-1452624009115.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 4,
        },
        {
          title: "Chris Verlaan tour",
          description: "Cabaret show at the Theater de Omval in Diemen",
          date: "11/05/2022",
           address:'Ouddiemerlaan 104, 1111 HL Diemen',
           latitude: '52.34211356292824',
      longitude: '4.964665696218367',
          mainImage:
            "https://www.demaagd.nl/site/assets/files/25544/chris_verlaan_-_man_in_de_maak.1024x1024.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 5,
        },
        {
          title: "Chris Verlaan tour",
          description: "Cabaret show at the Chasse Theater of Breda",
          date: "1/05/2022",
           address:'Claudius Prinsenlaan 8, 4811 DK Breda',
           latitude: '51.587525241833916',
      longitude: ', 4.7822117980372605',
          mainImage:
            "https://www.demaagd.nl/site/assets/files/25544/chris_verlaan_-_man_in_de_maak.1024x1024.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 5,
        },
        {
          title: "Remy Evers tour",
          description: "Cabaret show at the Isala Theater",
          date: "1/05/2022",
          address:'Stadsplein 5, 2903 HH Capelle aan den IJssel',
           latitude: '51.931598579706964',
      longitude: '4.588123069215971',
          mainImage:
            "https://www.isalatheater.nl/cms_files/system/images/img14051_174.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 6,
        },
        {
          title: "Art Exhibition by Carlo Tozzi",
          description:
            "Carlo Tozzi will show all his fantastic modern art paintings at the fantastic Design Museum Den Bosch",
          date: "03/06/2022",
          address:"De Mortel 4, 5211 HV's-Hertogenbosch",
           latitude: '51.686044096884245',
      longitude: ' 5.303941892720974',
          mainImage:
            "https://cdn.filestackcontent.com/resize=width:720,fit:max/output=f:pjpg,quality:75/5RkksfW3QV6CROKLORGO",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 7,
        },
        {
          title: "Art Exhibition by    */Carlo Tozzi",
          description:
            "Carlo Tozzi will show all his fantastic modern art paintings at the fantastic Design Museum Den Bosch",
            date: "08/06/2022",
            address:"De Mortel 4, 5211 HV's-Hertogenbosch",
           latitude: '51.686044096884245',
      longitude: ' 5.303941892720974',
          
          mainImage:
            "https://cdn.filestackcontent.com/resize=width:720,fit:max/output=f:pjpg,quality:75/5RkksfW3QV6CROKLORGO",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 8,
        },
        {
          title: "By the Creek 2022",
          description:
            "This summer you can finally enjoy the party!not one but 2 days in this fantastic location by the water,here you can make friend with strangers and reconnect with old friends.Discover everything there is to discover and while yuou are there go on adventure in our paradise piece of nature. Join us this here!",
            date: "23/06/2022",
        address:"Middelwaard 4133, Vianen",
           latitude: '51.99395118594189',
      longitude: ' 5.07716602689032',
          
          mainImage:
            "https://www.soundflow.nl/wp-content/uploads/2020/02/bythecreek.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 8,
        },
        {
          title: "Ineffekt",
          description: "Ineffekt will perform at the famous club Mono",
          date: "12/05/2022",
         address:"Vijverhofstraat 15, 3032 SB Rotterdam",
           latitude: '51.928469847947284',
      longitude: '4.478736598051671',
          mainImage:
            "https://clubmono.ro/wp-content/uploads/2020/01/shutterstock_199419065.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          artistId: 9,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
