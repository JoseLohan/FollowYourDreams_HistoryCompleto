var tim, tim_Img;
var astronomyBook;
var balcony, bathroom, bedroom, courtyard, garden, kitchen, livingroom, timBedroom;
var earthST, jupterST, marsST, mercuryST, neptuneST, saturnST, uranusST, venusST;

var text1 = `Essa e uma historia onde pode ser encontrada em muitos lugares`;
var text2 = `Este, é Tim, um jovem garoto que ama astronomia`;
var text3 = `Mas seus pais nao tem o mesmo pensamento, <br> infelizmente isso ainda é um segredo`;
var text4 = `Ajude-o, <br> quanto mais adesivos, mais coragem`;

var historyMoment = 0;

var texto;

var gameState = 0;
var history = 0;
var play = 1;
var ending = 2;

function preload(){
    tim_Img = loadImage("./images/tim.png");
    astronomyBook = loadImage("./images/astronomyBook.jpg");

    balcony = loadImage("./backgroundImages/balconyBackground.jpg");
    timBedroom = loadImage("./backgroundImages/timBedroomBackground.jpg");
    bedroom = loadImage("./backgroundImages/bedroomBackground.jpg");
    bathroom = loadImage("./backgroundImages/bathroomBackground.jpg");
    kitchen = loadImage("./backgroundImages/kitchenBackground.jpg");
    garden = loadImage("./backgroundImages/gardenBackground.jpg");
    courtyard = loadImage("./backgroundImages/courtyardBackground.jpg");
    livingroom = loadImage("./backgroundImages/livingroomBackground.jpg");
    
    mercuryST = loadImage("./stickersImages/mercurySticker.png");
    venusST = loadImage("./stickersImages/venusSticker.png");
    earthST = loadImage("./stickersImages/earthSticker.png");
    marsST = loadImage("./stickersImages/marsSticker.png");
    jupterST = loadImage("./stickersImages/jupterSticker.png");
    saturnST = loadImage("./stickersImages/saturnSticker.png");
    uranusST = loadImage("./stickersImages/uranusSticker.png");
    neptuneST = loadImage("./stickersImages/neptuneSticker.jpg");

}

function setup() {
  createCanvas(1000,800);

  texto = createElement("h2");
  texto.position(100,600);
  texto.class("texto")

  tim = createSprite(500, 400, 30, 30);
  tim.addImage(tim_Img);
  tim.visible = false;
  tim.scale = 0.5
 
}

function draw() {
    background(0);
    textAlign(CENTER);
    textSize(30);
    fill("white");

    if (keyWentDown("space")) {
        historyMoment ++;
    }
 
    if (historyMoment === 1) {
        texto.html(text1);
    }

    if (historyMoment === 2) {
        texto.html(text2);
        tim.visible = true
    }

    if (historyMoment === 3) {
        texto.html(text3);
    }

    if (historyMoment === 4) {
        texto.html(text4);
    }

    if (historyMoment === 5) {
        gameState = play
        texto.html ("")
    }

    if (gameState === play) {
       background(balcony);
       tim.scale = 0.3
       tim.y = 500
    }

    drawSprites();
}