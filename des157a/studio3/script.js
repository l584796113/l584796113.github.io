(function () {
    
    'use strict';

    const startGame=document.getElementById('start');
    const gameControl=document.getElementById('gamecontrol');
    const dice=document.getElementById('dice');
    const score1=document.getElementById('score1');
    const score2=document.getElementById('score2');
    const actionArea=document.getElementById('actions');
    let turnScore=0;

    const gameData={
        dice:['images/1die.png','images/2die.png','images/3die.png','images/4die.png','images/5die.png','images/6die.png'],
        players:['player 1','player 2'],
        score:[0,0],
        roll1:0,
        roll2:0,
        roll3:0,
        rollSum:0,
        index:0,
        gameEnd: 100
    };

    startGame.addEventListener("click",function(){
        gameData.index=Math.round(Math.random());
        document.getElementById("startPage").style.display="none";
        document.getElementById("game").style.display="flex";
        document.getElementById("game").style.backgroundColor= "rgb(78, 78, 78)";
        document.getElementById('quit').addEventListener("click",function(){
            location.reload();
        });
        setUpTurn();
    });
    // setUpTurn();

    function setUpTurn(){
        //game.innerHTML=`<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        //actionArea.innerHTML='<button id="roll">Roll the Dice</button>';
        switch(gameData.index){
            case 0: document.getElementById('container2').style.filter="brightness(30%)";
                    document.getElementById('container2').style.backgroundColor="rgb(51,51,51)";
                    document.getElementById('container1').style.filter="brightness(100%)";
                    document.getElementById('container1').style.backgroundColor="rgb(78,78,78)";
                    break;
            case 1: document.getElementById('container1').style.filter="brightness(30%)";
                    document.getElementById('container1').style.backgroundColor="rgb(51,51,51)";
                    document.getElementById('container2').style.filter="brightness(100%)";
                    document.getElementById('container2').style.backgroundColor="rgb(78,78,78)";
                    break;

        }

    }
    document.getElementById('roll').addEventListener("click",function(){
        throwDice();
    });
    document.getElementById('pass').addEventListener('click',function(){
        gameData.index?(gameData.index=0):(gameData.index=1);
        setUpTurn();
    });

    document.getElementById('instrucs').addEventListener('click',function(){
        document.getElementById('overlay').style.display="block";
        setTimeout(function(){
            document.getElementById('overlay').style.display="none";
        },5000)
    });



    function throwDice(){

        dice.innerHTML='';
        gameData.roll1=Math.floor(Math.random()*6)+1;
        gameData.roll2=Math.floor(Math.random()*6)+1;
        gameData.roll3=Math.floor(Math.random()*6)+1;
       //game.innerHTML =`<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        dice.innerHTML +=`<img id="dice1" src="${gameData.dice[gameData.roll1-1]}"> <img id="dice2" src="${gameData.dice[gameData.roll2-1]}"> <img id="dice3" src="${gameData.dice[gameData.roll3-1]}">`;
        gameData.rollSum =gameData.roll1+gameData.roll2+gameData.roll3;
        if(gameData.roll1 == gameData.roll2 && gameData.roll3 ==gameData.roll2){
            gameData.score[gameData.index]=100;
            gameData.index?(gameData.index=0):(gameData.index=1);
            turnScore=0;
            showCurrentScore();
            checkWinningCondition();
            setUpTurn();
        }else if(gameData.rollSum <=6){
            gameData.score[gameData.index]=gameData.score[gameData.index]-turnScore;
            gameData.index?(gameData.index=0):(gameData.index=1);
            turnScore=0;
            showCurrentScore();
            setUpTurn()
        }else if(gameData.roll1 === 1 || gameData.roll2 === 1|| gameData.roll3 === 1){
            gameData.index?(gameData.index=0):(gameData.index=1);
            showCurrentScore();
            // game.innerHTML+=`<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;        
            turnScore=0;        
            setUpTurn()
        }else{
            gameData.score[gameData.index]=gameData.score[gameData.index]+gameData.rollSum;
            turnScore+=gameData.rollSum;
            showCurrentScore();
            checkWinningCondition();
        // }
    }
    console.log(gameData.rollSum);
}
    function checkWinningCondition(){
            if(gameData.score[gameData.index]>=gameData.gameEnd){
                document.getElementById("startPage").style.display="none";
                document.getElementById("game").style.display="none";
                document.getElementById("restartPage").style.display="block";
                document.querySelector("#restartPage h1").innerHTML=`Player ${gameData.index+1} Won!`;
                document.getElementById('restart').addEventListener('click',function(){
                    location.reload();
                });
            }else{
                showCurrentScore();
            }
        }

    function showCurrentScore(){
        score1.innerHTML=`<h2>Score: ${gameData.score[0]}</h2>`;
        score2.innerHTML=`<h2>Score: ${gameData.score[1]}</h2>`;
        score1.style.height=`${6*gameData.score[0]+80}px`;
        score2.style.height=`${6*gameData.score[1]+80}px`;
    }



})();