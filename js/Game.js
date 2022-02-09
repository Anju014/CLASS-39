class Game {
  constructor() { }

  //read
  getState() {
    var gameStateLocation = database.ref("gameState")
    gameStateLocation.on("value", (data) => {
      gameState = data.val();
    })
  }

  //write
  update(newValue) {
    database.ref('/').update({
      gameState: newValue
    })
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  start() {
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount()


    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage(car1Image)
    car1.scale = 0.07

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage(car2Image)
    car2.scale = 0.07

    cars = [car1, car2]
  }

  play() {
    this.handleElements();
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      image(trackImage, 0, y - height * 5, width, height * 6);


      var index = 0;
      for (var plr in allPlayers) {
        index = index + 1
        var x = allPlayers[plr].positionX
        var y = height - allPlayers[plr].positionY

        cars[index - 1].position.x = x
        cars[index - 1].position.y = y
      }
    }

    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      player.updateDistance()

    }



    drawSprites();
  }

}
