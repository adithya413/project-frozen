const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)


    Engine.update(engine);

    // write code to display time in correct format here
if(hour>12){
    text("time"+hour%12+"pm",50,100)

}
else if(hour==0){
    text("time:12am ",50,100)
}
else (
    text("time"+hour%12+"am",50,100)

)

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON=await response.json()
var datetime=responseJSON.datetime;
hour=datetime.slice(11,13)
if(hour>=04 && hour<06){
    bg="sunrise1.png"
}
    else if(hour>=7 && hour<=9){
        bg="sunrise2.png"

}
else if(hour>=10 && hour<=12){
        bg="sunrise3.png"
        
}
else if(hour>=13 && hour<=15){
    bg="sunrise4.png"
    
}
else if(hour>=16 && hour<=18){
    bg="sunrise5.png"
    
}
else if(hour>=19 && hour<=21){
    bg="sunrise6.png"
    
}
else if(hour>=22 ){
    bg="sunrise7.png"
    
}
else if(hour>=0 && hour<=2){
    bg="sunrise8.png"
    
}
else if(hour>=3 && hour<=5){
    bg="sunrise9.png"
    
}else if(hour>=6 && hour<=8){
    bg="sunrise10.png"
    
}
backgroundImg=loadImage(bg)
    


}
