var canvas = document.getElementById("drawingArea");
var ctx = canvas.getContext("2d");

/////////////OLD CODE DO NOT USE/////////////

/*var playerX = 100;
var playerY = 100;

var playerDir = ""; OLD 

var player = new Image();
player.src = "clown.png"; */

/////////////////////////////////////////////

let player = new Player();

document.addEventListener("keydown", handleKeyPressed);
document.addEventListener("keyup", handleKeyLetGo);

setInterval(animate, 17);

function animate(){
    clearBackground();
    player.move();
    player.draw();
}


function handleKeyPressed(event){
    if(event.key == 'w'){
        player.goingUp = true;
        //spritesheet change logic here when added
    }
    if(event.key == 'a'){
        player.goingLeft = true;
        //spritesheet change logic here when added
    }
    if(event.key == 's'){
        player.goingDown = true;
        //spritesheet change logic here when added
    }
    if(event.key == 'd'){
        player.goingRight = true;
        //spritesheet change logic here when added
    }
}

function handleKeyLetGo(event){
    if(event.key == 'w'){
        player.goingUp = false;
    }
    if(event.key == 'a'){
        player.goingLeft = false;
    }
    if(event.key == 's'){
        player.goingDown = false;
    }
    if(event.key == 'd'){
        player.goingRight = false;
    }
}




function Player(){
    this.x = 0;
    this.y = 0;
    this.speed = 3; //arbitrarily set
    this.width = 75; //specifically for clown, need to change as spritesheet added
    this.height = 87; //^^
    this.sourceImage = new Image();
    this.sourceImage.src = "clown.png";
    //this.numImages = 6; use when spritesheet added, change number for # of sprites in spritesheet
    //this.currImageNum = 0; use when spritesheet is added
    this.goingUp = false;
    this.goingDown = false;
    this.goingLeft = false;
    this.goingRight = false;

    this.move = function(){
        if(this.goingUp) this.y -= this.speed;
        if(this.goingDown) this.y += this.speed;
        if(this.goingLeft) this.x -= this.speed;
        if(this.goingRight) this.x += this.speed;
    }

    this.draw = function(){
        let spritesheetX = 0, spritesheetY = 0;
        ctx.drawImage(this.sourceImage, 
                      spritesheetX,
                      spritesheetY,
                      this.width, 
                      this.height,
                      this.x,
                      this.y,
                      this.width,
                      this.height);
        // use when spritesheet added
        //this.currImageNum++;
        //this.currImageNum %= this.numImages;
        
    }
}

function clearBackground(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}