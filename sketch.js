//Create variables here
var saddog,happydog,database,foodS,foodStock,dog;



function preload()
{
  //load images here
  saddog = loadImage("dogImg.png");
  happydog= loadImage("dogImg1.png");
}

function setup() {

 database=firebase.database();
  createCanvas(500, 500);
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);



 
  
}


function draw() { 

 //displaying score
background(46,139,87)


if (keyWentDown(UP_ARROW)) {

writeStock(foodS);

dog.addImage(happydog);




}


  drawSprites();

text ("foodStock="+foodS,300,100)
fill("red")
//textSize(70)
  //add styles here
dog=createSprite(400,350,40,50)
dog.addImage("dog",happydog);
dog.scale=0.4





}

function readStock(data) {

foodS=data.val();

}

function writeStock(x) {

database.ref('/').update({food:x})

if (x<=0) {

x=0;

}else{
  x=x-1;

}


}
