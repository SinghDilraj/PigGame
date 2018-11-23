swal(`GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach the set winning score points on GLOBAL score wins the game
- The player to win the set number of games to win takes the trophy home.
- ENJOY!!!!`);

let dice1 = document.querySelector('.dice');
let dice2 = document.createElement('img'); 
dice2.classList.add('dice2');
dice2.src = 'dice-2.png';
dice2.style.position = 'absolute';
dice2.style.left = '50%';
dice2.style.top = '300px';
dice2.style.transform = 'translateX(-50%)';
dice2.style.height = '100px';
dice2.style.boxShadow = '0px 10px 60px rgba(0, 0, 0, 0.10)'
document.body.insertAdjacentElement('beforeend',dice2);
let randomImages = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];
let diceRoll = document.querySelector('.btn-roll');
let current0 = document.querySelector('#current-0');
let current1 = document.querySelector('#current-1');
let path = 'file:///C:/Users/SD27/Desktop/SOFTWARE%20DEVELOPER/javaScript/PIG%20GAME/Pig-Game/';
let dice1Score;
let dicep1Score;
let dice2Score;
let dicep2Score;
let score = 0;
let scorep1 = 0;
let score0 = document.querySelector('#score-0');
let score1 = document.querySelector('#score-1');
let name0 = document.querySelector('#name-0');
let name1 = document.querySelector('#name-1');
let scoreFor0;
let scoreFor1;
let p1Score = 0;
let p2Score = 0;
let hold = document.querySelector('.btn-hold');
let newGame = document.querySelector('.btn-new');
let p0Panel = document.querySelector('.player-0-panel');
let p1Panel = document.querySelector('.player-1-panel');
let audio = document.createElement('audio');
document.body.appendChild(audio);
let audioSrc = document.createElement('source');
audio.appendChild(audioSrc);
audioSrc.src = 'winner-winner-chicken-dinner.mp3';
let player1Img = document.createElement('img');
let player2Img = document.createElement('img');
player1Img.src = 'player1Turn.png';
player2Img.src = 'player2Turn.png';
player1Img.style.display = 'none';
player2Img.style.display = 'none';
player1Img.style.width = '50px';
player1Img.style.width = '50px';
player2Img.style.height = '50px';
player2Img.style.height = '50px';
player1Img.style.position = 'absolute';
player2Img.style.position = 'absolute';
player1Img.style.top = '275px';
player2Img.style.top = '275px';
player1Img.style.left = '550px';
player2Img.style.left = '770px';
document.body.appendChild(player1Img);
document.body.appendChild(player2Img);
let zeroScore1 = document.createElement('img');
zeroScore1.src = 'zeroScore.png';
zeroScore1.style.display = 'none';
zeroScore1.style.width = '50px';
zeroScore1.style.height = '50px';
zeroScore1.style.position = 'absolute';
zeroScore1.style.top = '503px';
zeroScore1.style.left = '405px';
document.body.appendChild(zeroScore1);
let zeroScore2 = document.createElement('img');
zeroScore2.src = 'zeroScore.png';
zeroScore2.style.display = 'none';
zeroScore2.style.width = '50px';
zeroScore2.style.height = '50px';
zeroScore2.style.position = 'absolute';
zeroScore2.style.top = '503px';
zeroScore2.style.left = '905px';
document.body.appendChild(zeroScore2);
let player1Win = 0;
let player2Win = 0;
let win1 = document.createElement('span');
let win2 = document.createElement('span');
p0Panel.appendChild(win1);
p1Panel.appendChild(win2);
win1.textContent = 'Total Wins ' + player1Win;
win2.textContent = 'Total Wins ' + player2Win;
let winningScoreInput = document.createElement('input');
winningScoreInput.type = 'number';
winningScoreInput.required = 'required';
document.body.appendChild(winningScoreInput);
winningScoreInput.style.position = 'absolute';
winningScoreInput.style.top = '550px';
winningScoreInput.style.left = '600px';
let winScore = document.createElement('span');
document.body.appendChild(winScore);
winScore.style.position = 'absolute';
winScore.style.top = '530px';
winScore.style.left = '607px';
winScore.textContent = 'Set The Winning Score'; 
winScore.style.fontWeight = 'bold';
let totalWins = document.createElement('span');
document.body.appendChild(totalWins);
totalWins.textContent = 'NUMBER OF WINS';
totalWins.style.position = 'absolute';
totalWins.style.top = '575px';
totalWins.style.left = '609px';
totalWins.style.fontWeight = 'bold';
let totalWinsInput = document.createElement('input');
document.body.appendChild(totalWinsInput);
totalWinsInput.type = 'number';
totalWinsInput.required = 'required';
totalWinsInput.placeholder = 'to win the game';
totalWinsInput.style.position = 'absolute';
totalWinsInput.style.top = '593px';
totalWinsInput.style.left = '600px';
let winner1 = document.createElement('img');
let winner2 = document.createElement('img');
winner1.src = 'player1Wins.png';
winner2.src = 'player2Wins.png';
document.body.appendChild(winner1);
document.body.appendChild(winner2);
winner1.style.position = 'absolute';
winner1.style.top = '170px';
winner1.style.left = '535px';
winner1.style.display = 'none';
winner1.style.width = '300px';
winner1.style.height = '250px';

winner2.style.position = 'absolute';
winner2.style.top = '170px';
winner2.style.left = '535px';
winner2.style.display = 'none';
winner2.style.width = '300px';
winner2.style.height = '250px';

function winner(){
    if(score0.textContent >=Number(winningScoreInput.value)){
        player1Win = player1Win + 1;
        win1.textContent = 'Total Wins ' + player1Win;
        
        player1Img.style.display = 'block';
        player2Img.style.display = 'none';

        setTimeout(function(){
            player1Img.style.display = 'none';
            player2Img.style.display = 'none';
        },1000);

        diceRoll.addEventListener('click',rollDice);

    }else if(score1.textContent >=Number(winningScoreInput.value)){
        player2Win = player2Win + 1;
        win2.textContent = 'Total Wins ' + player2Win;
        
        player1Img.style.display = 'none';
        player2Img.style.display = 'block';

        setTimeout(function(){
            player1Img.style.display = 'none';
            player2Img.style.display = 'none';
        },1000);

        diceRoll.addEventListener('click',player2);
    };
    if(win1.textContent[11] >= totalWinsInput.value && win1.textContent[11] != 0){
        winner1.style.display = 'block';
        setTimeout(function(){
            winner1.style.display = 'none';
            location.reload();
        },2000);
    }else if(win2.textContent[11] >= totalWinsInput.value && win2.textContent[11] != 0){
        winner2.style.display = 'block';
        setTimeout(function(){
            winner2.style.display = 'none';
            location.reload();
        },2000);
    };
};
function rollDice(){
    if(winningScoreInput.value === '' && totalWinsInput.value === ''){
        swal(`PLEASE FILL OUT BOTH WINNING SCORE AND NUMBER OF WINS`);
        setTimeout(function(){
            location.reload();
        },1500);
    };

    dice1.src = randomImages[parseInt(Math.random() * (6 - 0) - 0)];
    dice2.src = randomImages[parseInt(Math.random() * (6 - 0) - 0)];


    randomImages.forEach(function(ele,ind,arr){
        if(dice1.src === path + randomImages[ind]){
            dice1Score = ind + 1;
        };
    });
    
    randomImages.forEach(function(ele,ind,arr){
        if(dice2.src === path + randomImages[ind]){
            dice2Score = ind + 1;
        };
    });

    for(let i = 0;i < dice1Score + dice2Score;i++){
        score = score + 1;
        current0.textContent = score;
    };

    if(dice1.src === path + randomImages[0] || dice2.src === path + randomImages[0]){
        
        current0.textContent = 0;
        score = 0;

        diceRoll.removeEventListener('click',rollDice);
        diceRoll.addEventListener('click',player2);

        p1Panel.classList.add('active');
        p0Panel.classList.remove('active');

        player1Img.style.display = 'none';
        player2Img.style.display = 'block';

        setTimeout(function(){
            player1Img.style.display = 'none';
            player2Img.style.display = 'none';
        },1000);
        
        zeroScore1.style.display = 'block';
        zeroScore2.style.display = 'none';

        setTimeout(function(){
            zeroScore1.style.display = 'none';
            zeroScore2.style.display = 'none';
        },1000);
        swal({
            type: 'warning',
            title: 'Oops...',
            text: 'You Rolled A One!'
          });
    };

    hold.addEventListener('click',function(){
        scoreFor0 = Number(current0.textContent);
        p1Score = p1Score + scoreFor0;
        score0.textContent = p1Score;
        current0.textContent = 00;
        score = 0;

        diceRoll.removeEventListener('click',rollDice);
        diceRoll.addEventListener('click',player2);

        p1Panel.classList.add('active');
        p0Panel.classList.remove('active');
        if(score1.textContent <Number(winningScoreInput.value) && score0.textContent <Number(winningScoreInput.value)){
            player1Img.style.display = 'none';
            player2Img.style.display = 'block';

            setTimeout(function(){
                player1Img.style.display = 'none';
                player2Img.style.display = 'none';
            },1000);
        };

        if(score0.textContent >=Number(winningScoreInput.value)){
            name0.textContent = 'WINNER 🎈🎆🎇✨🎉🎊🎈';
            diceRoll.removeEventListener('click',rollDice);
            diceRoll.removeEventListener('click',player2);
            p1Panel.classList.remove('active');
            audio.loop = true;
            audio.play();
        }else if(score1.textContent >=Number(winningScoreInput.value)){
            name1.textContent = 'WINNER 🎈🎆🎇✨🎉🎊🎈';
            diceRoll.removeEventListener('click',rollDice);
            diceRoll.removeEventListener('click',player2);
            p0Panel.classList.remove('active');
            audio.loop = true;
            audio.play();
        };
    });
};

function player2(){

    if(winningScoreInput.value === '' && totalWinsInput.value === ''){
        swal(`PLEASE FILL OUT BOTH WINNING SCORE AND NUMBER OF WINS`);
    };

    dice1.src = randomImages[parseInt(Math.random() * (6 - 0) - 0)];
    dice2.src = randomImages[parseInt(Math.random() * (6 - 0) - 0)];
    

    randomImages.forEach(function(ele,ind,arr){
        if(dice1.src === path + randomImages[ind]){
            dicep1Score = ind + 1;
        };
    });

    randomImages.forEach(function(ele,ind,arr){
        if(dice2.src === path + randomImages[ind]){
            dicep2Score = ind + 1;
        };
    });

    for(let i=0; i < dicep1Score + dicep2Score; i++){
        scorep1 = scorep1 + 1;
        current1.textContent = scorep1;
    };

    if(dice1.src === path + randomImages[0] || dice2.src === path + randomImages[0]){
        
        current1.textContent = 0;
        scorep1 = 0;

        diceRoll.removeEventListener('click',player2);
        diceRoll.addEventListener('click',rollDice);

        p1Panel.classList.remove('active');
        p0Panel.classList.add('active');

        player1Img.style.display = 'block';
        player2Img.style.display = 'none';
        
        setTimeout(function(){
            player1Img.style.display = 'none';
            player2Img.style.display = 'none';
        },1000)

        zeroScore1.style.display = 'none';
        zeroScore2.style.display = 'block';

        setTimeout(function(){
            zeroScore1.style.display = 'none';
            zeroScore2.style.display = 'none';
        },1000);
        swal({
            type: 'warning',
            title: 'Oops...',
            text: 'You Rolled A One!'
          });
    };

    hold.addEventListener('click',function(){
        scoreFor1 = Number(current1.textContent);
        p2Score = p2Score + scoreFor1;
        score1.textContent = p2Score;
        current1.textContent = 00;
        scorep1 = 0;

        diceRoll.removeEventListener('click',player2);
        diceRoll.addEventListener('click',rollDice);

        p1Panel.classList.remove('active');
        p0Panel.classList.add('active');
        if(score1.textContent <Number(winningScoreInput.value) && score0.textContent <Number(winningScoreInput.value)){
            player1Img.style.display = 'block';
            player2Img.style.display = 'none';

            setTimeout(function(){
                player1Img.style.display = 'none';
                player2Img.style.display = 'none';
            },1000);
        };
        if(score0.textContent >=Number(winningScoreInput.value)){
            name0.textContent = `WINNER 🎈🎆🎇✨🎉🎊🎈`;
            diceRoll.removeEventListener('click',rollDice);
            diceRoll.removeEventListener('click',player2);
            p1Panel.classList.remove('active');
            audio.loop = true;
            audio.play();
        }else if(score1.textContent >=Number(winningScoreInput.value)){
            name1.textContent = `WINNER 🎈🎆🎇✨🎉🎊🎈`;
            diceRoll.removeEventListener('click',rollDice);
            diceRoll.removeEventListener('click',player2);
            p0Panel.classList.remove('active');
            audio.loop = true;
            audio.play();
        };
    });
};

diceRoll.addEventListener('click',rollDice);

newGame.addEventListener('click',function(){
    winner();
    current0.textContent = 00;
    current1.textContent = 00;
    score0.textContent = 00;
    score1.textContent = 00;
    score = 0;
    scorep1 = 0;
    scoreFor0 = 0;
    scoreFor1 = 0;
    p2Score = 0;
    p1Score = 0;
    name0.textContent = 'PLAYER 1';
    name1.textContent = 'PLAYER 2';
});