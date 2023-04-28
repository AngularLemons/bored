let close =0;
      function menuFunction(){
        document.getElementById("pong").innerHTML = "Pong";
        document.getElementById("hang").innerHTML = "Hangman";
        document.getElementById("quiz").innerHTML = "Quizspel";
        document.getElementById("titelmenu").innerHTML = "Alla spel";
        close++;
        document.getElementById("dropMenu").style.width = "150px";


        if(close == 2){
          document.getElementById("pong").innerHTML = "";
          document.getElementById("hang").innerHTML = "";
          document.getElementById("quiz").innerHTML = "";
          document.getElementById("titelmenu").innerHTML = "";

          close = 0;
          document.getElementById("dropMenu").style.width = "0px";

        }
      }

    