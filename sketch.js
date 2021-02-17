var canvas;
var music;
var box;
var edge;
var surface1,surface2,surface3,surface4;


function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite (90,560,180,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite (290,560,190,20);
    surface2.shapeColor = "yellow";

    surface3 = createSprite (505,560,200,20);
    surface3.shapeColor = "orange";

    surface4 = createSprite (710,560,180,20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite (random(20,750),20,25,25);
    box.velocityX = 6;
    box.velocityY = 7;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    
    edge = createEdgeSprites();
    box.bounceOff (edge);
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();
    }
    else if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    else if(surface3.isTouching(box) && box.bounceOff(surface3) ){
        box.shapeColor = "orange";
    }
    else if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

    //add condition to check if box touching surface and make it box
    
    drawSprites();
}
