class PlayerInput {

  constructor() {
    this.inputImg = loadImage('images/inputWindow/registerWindow.png');
    this.waitingImg = loadImage('images/inputWindow/waitingWindow.png');

    this.input = createInput("Name");
    this.button = createButton("PLAY");
    this.window;
  } 

  destroy(){
    this.window.destroy();
  }

  display(){
    //creating window
    this.window = createSprite(windowWidth/2,windowHeight/2);
    this.window.scale = (windowWidth/windowHeight)/2;
    this.window.addImage(this.inputImg);

    this.input.position(windowWidth/2 -100, windowHeight/2 + 30);
    this.button.position(windowWidth/2 +100, windowHeight/2 + 30);

    //button pressed function
    this.button.mousePressed(()=>{
      touches = [];
      this.input.hide();
      this.button.hide();
      
      //get name
      player.name = this.input.value();
      playerCount +=1;
      player.index = playerCount; 
      player.updating();
      player.updateCount(playerCount);

      if(allPlayers === undefined){
        this.window.addImage(this.waitingImg);
      }
    }); 
  }

  
}
