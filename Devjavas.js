let  res = JSON.parse(localStorage.getItem('Acc')) || {Wins:0,Loses:0,Ties:0};
          //defult value for a parmater use = with it
        function putarandommove()
          {  let value;
            const RandomN = Math.random();
            if ((0<=RandomN)  &&  (RandomN<(1/3))) { value='Rock';} 
          else if (RandomN>=1/3    &&    RandomN<(2/3)) { value='Paper';} 
          else { value='Scissors';} ;
        return value;
        }
          function moveavalue(userChoice)
    { 
    
              
                let result;
     value = putarandommove();
                let cont_message=`you picked ${userChoice} . Computer picked `;
                let comparison = ((userChoice==='Paper' &&  value === 'Rock')||(userChoice==='Rock' &&  value === 'Scissors')||(userChoice==='Scissors' && value==='Paper'));
      if (value === userChoice ) {result='Tie'} 
      else if (comparison) {result='You win'}
      else  {result='You lose'};
      if (result ==='You win') { res.Wins++;}
      else if (result ==='You lose') { res.Loses++;}
      else if (result ==='Tie') {res.Ties++;};
      {document.querySelector('.theFinalResult').innerHTML=(` <p>You <img src="images/${userChoice}-emoji.png" > <img src="images/${value}-emoji.png" > Computer</p> `)} ;
      document.querySelector('.TheResult').innerHTML=(`${result}`);
      updatescore();
      localStorage.setItem('Acc',JSON.stringify(res));
      return localStorage.setItem('Accessto',JSON.stringify(res));
    }; 
    function updatescore()
{     document.querySelector('.thetotalresult').innerHTML=( `Wins:${res.Wins}  Losses:${res.Loses}  Ties: ${res.Ties}`);};
let intervalId;
function autoplay() {
intervalId = setInterval(function() {
let userChoice=putarandommove();
moveavalue(userChoice)},1000);

};

let AutoPlayon=false;
function runOrStop() {
    if (!AutoPlayon) {autoplay(); AutoPlayon=true;}
    else if(AutoPlayon) {
    clearInterval(intervalId);
    AutoPlayon=false;

}

}


    