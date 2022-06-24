/**
 * 
 * Devo cliccare su un botton che genera una griglia quadrata (button.addEventListener)
 *    
 * 
 * Aggiungere una griglia all'interno di un contenitore del DOM (#grid-wrapper)
 *    ogni cella della griglia conterrà un numero progressivo a 1 a 100 ==> griglia 10x10
 *    creare un ciclo che generi dinamicamente 100 celle quadrate   VVV
 *    creare una serie di numeri progressivi da 1 a 100 e inserirli nella cella VVV
 * 
 *    inserire i numeri generati in ogni cella della griglia
 *    al click su una cella, questa si colorerà di azzurro
 * 
 *    inserire le celle così create all'interno della griglia
 *    
 */


function squareGenerator() {
   const createSquare = document.createElement('div');
   createSquare.classList.add('square');

   return createSquare;
}

const gridWrapper = document.getElementById('grid-wrapper');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function(){

   gridWrapper.innerHTML='';
   gridWrapper.classList.add('game-grid');

   for (let i = 1;  i <= 100;  i++) {
      const square = squareGenerator();
      const cellNumbers = square.innerHTML = i;

      square.addEventListener('click', function(){
         square.classList.toggle('active');
         console.log(`hai cliccato la cella ${i}`);
      });

      gridWrapper.append(square);
   };

});


/**
 * 
 *    Devo generaare una lista di 16 numeri casuali nelle celle della griglia (le bombe);
 *       ciclo 'for' con math.random per generare i numeri;
 *       se il numero generato è già presente nella cella, generare un altro numero
 * 
 * 
 * 
 */

const randomNumbersList = [];

for (let i=1; i<=16; i++) {
   let randomNumber = Math.floor(Math.random() * (101 - 1) + 1);

   if (randomNumber != i) {
      randomNumbersList.push(randomNumber);
      randomNumber;
   } 

   
}

console.log(randomNumbersList);