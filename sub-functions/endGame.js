class End{
    constructor(){
        this.block1,this.block2;
        this.game;
        this.winImg = loadImage('images/winnerLogo.png');
        this.loseImg = loadImage('images/loserLogo.png');
        this.win,this.lose;
        this.block = new Block()
    }

    //link blocks
    linkBlock(){
        var block1Ref = database.ref('players/player1/block');
        block1Ref.on("value",(data)=>{
            this.block1 = data.val();
        })
        var block2Ref = database.ref('players/player2/block');
        block2Ref.on("value",(data)=>{
            this.block2 = data.val();
        })
    }

    //change block
    changeBlock(){
        if(this.block1 >= 100){
            this.block.updateBlock1(100);
            this.block.updateTurn1(3);
            this.block.updateTurn2(3);
        }
        if(this.block2 >= 100){
            this.block.updateBlock2(100);
            this.block.updateTurn1(3);
            this.block.updateTurn2(3);
        }
    }

    //change gameState
    changeState(){
        this.game = new Game();

        if(this.block1 === 100){
            this.game.update(2);
        }
        if(this.block2 === 100){
            this.game.update(3);
        }
    }

    //endGame function
    endGame(){
        if(this.block1 === block && gameState === 2){
            this.win = createSprite(windowWidth/2,windowHeight/2,10,10);
            this.win.addImage(this.winImg);
            this.win.scale = (windowWidth/windowHeight)/2;
        }else if(this.block2 === block && gameState === 2){
            this.lose = createSprite(windowWidth/2,windowHeight/2,10,10);
            this.lose.scale = (windowWidth/windowHeight)/2;
            this.lose.addImage(this.loseImg);
        }

        if(this.block2 === block && gameState === 3){
            this.win = createSprite(windowWidth/2,windowHeight/2,10,10);
            this.win.scale = (windowWidth/windowHeight)/2;
            this.win.addImage(this.winImg);
        }else if(this.block1 === block && gameState === 3){
            this.lose = createSprite(windowWidth/2,windowHeight/2,10,10);
            this.lose.scale = (windowWidth/windowHeight)/2;
            this.lose.addImage(this.loseImg);
        }
        
    }
}