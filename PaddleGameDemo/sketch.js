// Garrett Faure
// 09/26
var n;
var balls = [];
var p1;
var gameState = 0;
var difficultyLevel = 0;
var btnEasy, btnMed, btnHard, btnTitle, btnEnd, btnReset;
var score;
var life;


// setup runs once at the start of your program
function setup(){
  // put start code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //loadBalls();
  // Buttons for game selection (except title will not be able to be clicked)

  initGame();

}

// Draw runs 30 times a second
function draw(){
        background(255, 255, 255);
        if(gameState === 0){
          titleScreen();
        }else if(gameState === 1){
          startGame();
        } else if(gameState === 2){
          playGame();
        } else if(gameState === 3){
          sickoGame();
        } else if(gameState === 4){
          endGame();
        }

      }
        // Number of balls based on the skill level
  function initGame(){
    btnTitle = new Buttons(250, 100, 300, 50, "Paddle Game", RGB(random(255)));
    btnEasy = new Buttons(200, 650, 50, 50, "Easy", RGB(random(255)));
    btnMed = new Buttons(375, 650, 50, 50, "Medium", RGB(random(255)));
    btnHard = new Buttons(550, 650, 50, 50, "Sicko \n Mode", RGB(random(255)));
    loadBalls(10);
    life = 30;
    n = 10;
  }

  function titleScreen(){
    btnTitle.run();
    btnEasy.run();
    btnMed.run();
    btnHard.run();
  }

  function startGame(){


    if(balls.length <== 0){
      loadBalls(n++)
    }
    paddle.run();
    for(var i = 0; i < balls.length; i++){
        balls[i].run()
      }
    }
    for(var i = balls.length - 1; i >= 0; i--){
      if(balls[i].loc.y < windowHeight){
        balls.splice(i, 1);
      }
    }


  }//   end startGame


        function endGame(){
          if(gameState === 4){
            if(life === 0){
              background(20, 20, 20);
              btnEnd = new Buttons(350, 100, 100, 50, "YOU LOST! D:", RGB(random(255)));
              btnReset = new Buttons(375, 400, 50, 50, "Start Again?", RBG(random(255)));
            }
          }
        }

        function playGame(){
          life = 20
          n = 15;
          loadBalls(n);
          if(balls.length <== 0){
            loadBalls(n += 2)
          }
        }

        function sickoGame(){
          life = 10
          n = 20;
          loadBalls(n);
          if(balls.length <== 0){
            loadBalls(n+=5)
          }
        }

        function loadBalls(n){
          for(var i = 0; i < n; i++){
            balls[i] = new Ball(random(width), random(height), 3, 3, i);
          }
        }





function mouseClicked(){
    if(gameState === 0){//  title screen
      if(mouseX >= btnEasy.loc.x &&
        mouseX <= 250 &&
        mouseY >= 700 &&
        mouseY <= 650){
    //  what to do if this button clicked
          gameState = 1;
          difficultyLevel = "e"
        }
        if(mouseX >= 375 &&
          mouseX <= 425 &&
          mouseY >= 700 &&
          mouseY <= 650){
            gameState = 1;
            difficultyLevel = "m"
          }
          if(mouseX >= 600 &&
            mouseX <= 650 &&
            mouseY >= 700 &&
            mouseY <= 650){
              gameState = 1;
              difficultyLevel = "h"

    }else if(gameState ===4){


    }



}
        // if(gameState = 0){
        //   titleScreen.run();
        // }
        // if(mouseX >= 200 &&
        //   mouseX <= 250 &&
        //   mouseY >= 700 &&
        //   mouseY <= 650){
        //     gameState === 1;
        //   }
        //   if(mouseX >= 375 &&
        //     mouseX <= 425 &&
        //     mouseY >= 700 &&
        //     mouseY <= 650){
        //       gameState === 2;
        //     } if(mouseX >= 600 &&
        //       mouseX <= 650 &&
        //       mouseY >= 700 &&
        //       mouseY <= 650){
        //         gameState === 3;
        //       }
        // nothing likes to work :)
