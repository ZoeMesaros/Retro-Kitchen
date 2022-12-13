const shopItemsData = [
  {
    id: "ariete-coffee-blue",
    name: "Ariete kaffebryggare",
    price: 500,
    desc: "Ariete kaffebryggare håller ditt nybryggda kaffe varmt längre. Välj själv när du vill att ditt kaffe ska vara klart och njut av den coola retrodesignen.",
    img: "src/images/brands/ariete/coffee/ariete-vintage-kaffebryggare-(bla).png",
    colors: [
      "src/images/blue.png",
      "src/images/green.png",
      "src/images/beige.png",
    ],
    colorTypes: [
      { id: "ariete-coffee-green", 
      img: "src/images/brands/ariete/coffee/ariete-vintage-kaffebryggare-(gron).png" },
      {
        id: "ariete-coffee-beige",
        img: "src/images/brands/ariete/coffee/ariete-vintage-kaffebryggare-(beige).png",
      },
    ],
  },
  {
    id: "ariete-espresso-blue",
    name: "Ariete espressomaskin",
    price: 1200,
    desc: "Skäm bort dig själv med ett riktigt gott kaffe. Ariete Vintage espressomaskin har manuell funktion, 0,9 liters vattentank, 15 bars tryck och mjölkskummare som låter dig njuta av goda espressos och cappuccinos varje dag.",
    img: "src/images/brands/ariete/espresso/ariete-espressomaskin(bla).png",
    colors: [    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/beige.png",],
    colorTypes: [
      { id: "ariete-espresso-green", 
      img: "src/images/brands/ariete/coffee/ariete-vintage-kaffebryggare-(gron).png" },
      {
        id: "ariete-espresso-beige",
        img: "src/images/brands/ariete/espresso/ariete-espressomaskin(beige).jpg",
      },
    ]
  },
  {
    id: "ariete-toaster-blue",
    name: "Ariete brödrost",
    price: 450,
    desc: "Charmiga Ariete Vintage brödrost kommer med 6 effektlägen, Defrost, Re-heat, cancel-funktion, auto-eject samt löstagbar låda för smulor så du kan njuta av en riktigt god toast till frukosten.",
    img: "src/images/brands/ariete/toaster/ariete-brodrost(bla).png",
    colors: [    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/beige.png",],
    colorTypes: [
      { id: "ariete-toaster-green", 
      img: "src/images/brands/ariete/toaster/ariete-brodrost(gron).jpg" },
      {
        id: "ariete-toaster-beige",
        img: "src/images/brands/ariete/toaster/ariete-brodrost(beige).png",
      },
    ]
  },
  {
    id: "ariete-toaster-x4-green",
    name: "Ariete brödrost 4 skivor",
    price: 800,
    desc: "Med denna brödrost i vintage-design från Ariete kan du njuta av rostat bröd varje morgon. Brödrosten har plats till 4 skivor bröd och flera inställningar som gör att du rostar brödet precis efter dina preferenser. Den fina vintage-designen passar i det moderna, såväl som i det klassiska köket och rosten finns i olika färger, vilket gör att du kan välja den som passar bäst hos just dig.",
    img: "src/images/brands/ariete/toaster-x4/ariete-brodrost-x4(gron).png",
    colors: [    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/beige.png",],
    colorTypes: [
      { id: "ariete-toaster-x4-green", 
      img: "src/images/brands/ariete/toaster-x4/ariete-brodrost-x4(bla).png" },
      {
        id: "ariete-toaster-x4-beige",
        img: "src/images/brands/ariete/toaster-x4/ariete-brodrost-x4(beige).png",
      },
    ]
  },
  {
    id: "ariete-waterboiler-green",
    name: "Ariete vattenkokare",
    price: 450,
    desc: "Ariete Vintage vattenkokare ger dig hög kapacitet på 1,7 liter, snabb uppvärmning, automatisk avstängning och enkel rengöring så du enkelt kan förbereda ditt kaffe eller te för dig och dina vänner.",
    img: "src/images/brands/ariete/water-boiler/ariete-vattenkokare(gron).png",
    colors: [    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/beige.png",],
    colorTypes: [
      { id: "ariete-waterboiler-blue", 
      img: "src/images/brands/ariete/water-boiler/ariete-vattenkokare(bla).png" },
      {
        id: "ariete-waterboiler-beige",
        img: "src/images/brands/ariete/water-boiler/ariete-vattenkokare(beige).png",
      },
    ]
  },
  {
    id: "smeg-blender-pink",
    name: "Smeg blender",
    price: 2000,
    desc: "Kraftfull blender i 50-talsstil från italienska Smeg. Kannan rymmer 1,5 liter och tål temperaturer upp till 70ºC. Välj mellan fyra olika hastigheter och program för iskross och smoothie. Soft Start-funktionen gör att blendern startar långsamt och sedan ökar hastigheten vilket ger en säker blandning utan något onödigt skvätt.",
    img: "src/images/brands/smeg/blender/smeg-blender(rosa).png",
    colors: [    
        "src/images/pink.png",
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/red.png",
    ],
    colorTypes: [
      { id: "smeg-blender-blue",
      img: "src/images/brands/smeg/blender/smeg-blender(bla).png" },
      {
        id: "smeg-blender-green",
        img: "src/images/brands/smeg/blender/smeg-blender(gron).png",
      },
      {
        id: "smeg-blender-red",
        img: "src/images/brands/smeg/blender/smeg-blender(rod).png",
      },
    ]
  },
  {
    id: "smeg-coffee-pink",
    name: "Smeg kaffebryggare",
    price: 2000,
    desc: "Retroinspirerade 50's Style kaffebryggare från Smeg som blir en elegant touch i köket samtidigt som den ger dig ett riktigt gott kaffe! Kaffebryggare från Smeg kommer i många olika färgglada färger. Kaffemaskinen har en inbyggd smart timer där du kan du ställa in vilken tid du vill ha ditt nybryggda kaffe från Smeg. Ställ in timern och vakna till doften av nybryggt kaffe.",
    img: "src/images/brands/smeg/coffee/smeg-kaffebryggare(pastellrosa).png",
    colors: [
        "src/images/pink.png",    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/red.png",
    ],
    colorTypes: [
      { id: "smeg-coffee-blue",
      img: "src/images/brands/smeg/coffee/smeg-kaffebryggare(pastellbla).png" },
      {
        id: "smeg-coffee-green",
        img: "src/images/brands/smeg/coffee/smeg-kaffebryggare(pastellgron).png",
      },
      {
        id: "smeg-coffee-red",
        img: "src/images/brands/smeg/coffee/smeg-kaffebryggare(rod).png",
      },
    ]
  },
  {
    id: "smeg-espresso-pink",
    name: "Smeg espressomaskin",
    price: 3000,
    desc: "Smeg espressomaskin har en elegant 50-talsinprirerad design. Rikligt snygg att ha framme på köksbänken. Förutom en snygg design gör Smeg espressomaskin också fantastiskt gott kaffe varje gång.",
    img: "src/images/brands/smeg/espresso/smeg-manuell-espressomaskin(rosa).png",
    colors: [
        "src/images/pink.png",    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/red.png",
    ],
    colorTypes: [
      { id: "smeg-espresso-blue",
      img: "src/images/brands/smeg/espresso/smeg-manuell-espressomaskin(bla).png" },
      {
        id: "smeg-blender-green",
        img: "src/images/brands/smeg/espresso/smeg-manuell-espressomaskin(gron).png",
      },
      {
        id: "smeg-coffee-red",
        img: "src/images/brands/smeg/espresso/smeg-manuell-espressomaskin(rod).png",
      },
    ]
  },
  {
    id: "smeg-fridge-combined-red",
    name: "Smeg kylskåp kombinerat",
    price: 15000,
    desc: "Med Smeg 50 s Style kylskåp/frys kombiskåp FAB50RPG5 kan du addera stil och färg till ditt kök, samtidigt som du kan njuta av alla de teknologier du önskar från ett modernt kombiskåp. Det har justerbara hyllor, en låda för frukt och grönt, NoFrost-system och MultiAirFlow-kylning som tar väl hand om både färska och frysta matvaror.",
    img: "src/images/brands/smeg/fridge/combined/smeg-kombinerad-kyl-&-frys(rod).png",
    colors: [
        "src/images/beige.png",    
        "src/images/blue.png",
        "src/images/green.png",
        "src/images/red.png",
    ],
    colorTypes: [
      { id: "smeg-fridge-combined-blue",
      img: "src/images/brands/smeg/fridge/combined/smeg-kombinerad-kyl-&-frys(bla).png" },
      {
        id: "smeg-fridge-combined-creme",
        img: "src/images/brands/smeg/fridge/combined/smeg-kombinerad-kyl-&-frys(creme).png",
      },
      {
        id: "smeg-fridge-combined-green",
        img: "src/images/brands/smeg/fridge/combined/smeg-kombinerad-kyl-&-frys(gron).png",
      },
    ]
  },
  {
    id: "smeg-fridge-green",
    name: "Smeg kylskåp",
    price: 10000,
    desc: "Smeg 50 s Style kylskåp med retrodesign tar inte mycket plats i köket men har ändå en rymlig 135 l-interiör och modern teknik som effektiv LED-belysning och ett enkelt avfrostningssystem. Denna modell är högergängad.",
    img: "src/images/brands/smeg/fridge/small/smeg-fristaende-kylskap-gron.png",
    colors: [   
        "src/images/pink.png",
        "src/images/blue.png",
        "src/images/green.png", 
    ],
    colorTypes: [
      { id: "smeg-fridge-pink",
      img: "src/images/brands/smeg/fridge/small/smeg-fristaende-kylskap-rosa.png" },
      {
        id: "smeg-fridge-blue",
        img: "src/images/brands/smeg/fridge/small/smeg-fristaende-kylskap-bla.png",
      },
      {
        img: "src/images/brands/smeg/fridge/small/smeg-fristaende-kylskap-insida.png",
      },
    ]
  },
  {
    id: "smeg-fridge-special",
    name: "Smeg kylskåp Coca Cola",
    price: 25000,
    desc: "Lägg till en uppfriskande accent till ditt kök med ett retro Smeg-kylskåp, som kommer i ett elegant Enjoy a Coke-tema. Detta fristående kylskåp erbjuder en 244-liters volym med ett Multiflow-system för pålitlig långtidsförvaring av dina matvaror.",
    img: "src/images/brands/smeg/fridge/smeg-fristaende-kylskap-special.png",
    colors: [   
        "src/images/red.png",
    ]
  },
];