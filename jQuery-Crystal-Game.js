 $(document).ready(function() {

     //1. Create a random number between....let's do 20-100.



     
     var randomNumber = Math.floor(Math.random() * 120 + 20);
     console.log(randomNumber);
     $("#numberRandom").text(randomNumber);
     var userNumber = 0;
      var crystalOne = (Math.floor(Math.random() * 15 + 1));
     var crystalTwo = (Math.floor(Math.random() * 15 + 1));
     var crystalThree = (Math.floor(Math.random() * 15 + 1));
     var crystalFour = (Math.floor(Math.random() * 15 + 1));

     var losses = 0;
     var wins = 0;

function reset() {


     
      randomNumber = Math.floor(Math.random() * 120 + 20);
     console.log(randomNumber);
     $("#numberRandom").text(randomNumber);

      crystalOne = (Math.floor(Math.random() * 15 + 1));
      crystalTwo = (Math.floor(Math.random() * 15 + 1));
      crystalThree = (Math.floor(Math.random() * 15 + 1));
      crystalFour = (Math.floor(Math.random() * 15 + 1));

     //Have a base starting point which will be 0. Add to that number each time an image is clicked.
      userNumber = 0;
 }

     function win() {

        wins++;
        $("#winChecks").text(wins);
        reset();
     }

     function loss() {
        losses++;
        $('#lossChecks').text(losses);
        reset();
     }




     //2. Assign 4 numbers randomly between the given crystal selections. 4 numbers
     // Let these numbers be between 1 and 15
/*

     
*/

     //Have each crystal add to the playerprogression integer. 

     $("#crystal-one").on("click", function() {




         userNumber = userNumber + crystalOne;

         console.log(userNumber);

         $("#addNumber").text(userNumber);

         if (userNumber === randomNumber) {
             win();

         } else if (userNumber > randomNumber) {
             loss();

         }



     });

     $("#crystal-two").on("click", function() {




         userNumber = userNumber + crystalTwo;

         console.log(userNumber);

         $("#addNumber").text(userNumber);

         if (userNumber === randomNumber) {
             win();
            
            

         } else if (userNumber > randomNumber) {
             loss();
             

         }


     });


     $("#crystal-three").on("click", function() {




         userNumber = userNumber + crystalThree;

         console.log(userNumber);

         $("#addNumber").text(userNumber);

         if (userNumber === randomNumber) {
             win();


         } else if (userNumber > randomNumber) {
             loss();

         }


     });


     $("#crystal-four").on("click", function() {




         userNumber = userNumber + crystalFour;

         console.log(userNumber);

         $("#addNumber").text(userNumber);

         if (userNumber === randomNumber) {
             win();

         } else if (userNumber > randomNumber) {
             loss();

         }


     });
     //create a win checker THAT WORKS GOD DAG NABIT.

   







 });