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

function generatedNumber(list, min, max) {

   let validNumber = true;
    
   while(validNumber) {
      let randomNumber =  Math.floor(Math.random() * (max - min) + min);
      validNumber = list.includes[randomNumber];

      if (!validNumber) {
         list.push(randomNumber);
      }
      
   }
}





const gridWrapper = document.getElementById('grid-wrapper');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function(){

   gridWrapper.innerHTML='';
   gridWrapper.classList.add('game-grid');


   const bombs = [];
   for (let i=0; i<16; i++) {
      generatedNumber(bombs, 1, 100);
   }
   console.log(bombs);


   for (let i = 1;  i <= 100;  i++) {
      const square = squareGenerator();
      square.innerHTML = i;
      
      square.addEventListener('click', function(){
         square.classList.add('active');
         let score = document.querySelectorAll('.active');
         if (bombs.includes(i)) {
            square.classList.remove('active');
            square.classList.add('bomb');
            alert(`Hai perso! Il tuo punteggo è ${score.length - 1}`)
         } else if (score.length === 84) {
            alert('hai vinto!');
         }
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


