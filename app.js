var winningCombinations, gameBoard, cpuIcon,playerIcon, playerData,idOfLast,cpuChoice;

var allWinningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];

function startGame(){
	winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
 	gameBoard = [1,2,3,4,5,6,7,8,9];
 	cpuIcon = "O";
 	playerIcon="X";
  	playerData=[];
 	cpuData=[];
 	idOfLast;
 	cpuChoice;
  	$("span.pTest").html("");
  	document.getElementById("pTest").innerHTML ="";
}

function playerTurn(id){
  idOfLast=+id;
  console.log(idOfLast);
  $("#"+id).html("<span class=\"pTest\">"+playerIcon+"</span>");
  playerData.push(+id);
  allWinningCombinations.forEach(function(){})
  gameBoard.splice(gameBoard.indexOf(+id),1);
  winningCombinations.forEach(function(combo){
    if(combo.indexOf(+id) > -1){
      combo.splice(combo.indexOf(+id),1);
    }
  })
  setTimeout(function(){cpuTurn()}, 500);
}

var arrayOfChoices=[];

function cpuTurn(){
  console.log(winningCombinations)
  winningCombinations.sort(function(a, b){
    return a.length - b.length
  });
  cpuChoice=winningCombinations[0][0];
  gameBoard.splice(gameBoard.indexOf(cpuChoice),1);
  $("#"+cpuChoice).html("<span class=\"pTest\">"+cpuIcon + "</span>");
  var newWinningComboList =[];
 
  for (var j=0;j<winningCombinations.length;j++){
   console.log(winningCombinations[j] + "combo" + cpuChoice +"cpu");  if(winningCombinations[j].indexOf(cpuChoice) ===-1){
    console.log(winningCombinations[j] + "combo" + cpuChoice +"cpu");  newWinningComboList.push(winningCombinations[j]);
   }
  }
    winningCombinations= newWinningComboList.slice();
    console.log(winningCombinations)
     return;
}
  
startGame();


