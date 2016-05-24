//The divs
$(document).ready(function() {
  var questions = document.getElementById("question");
  var first = document.getElementById("b1");
  var second = document.getElementById("b2");
  var third = document.getElementById("b3");
  var fourth = document.getElementById("b4");
  var add = document.getElementById("points");
  var time = document.getElementById("time");

  var currentlvl = 0;


  var levels = [{
    question: "What Year did Apartheid begin",
    choice1: "1950",
    choice2: "1946",
    choice3: "1948",
    choice4: "1947",
    answer: "1948",
    gif: "http://www.mrjsmusicroom.com/quote%202013/feb%20quote%20pics/MusicNotes.gif"
  }, {
    question: "Which is a form of protest that the ANC used.",
    choice1: "Sitting on White only Benches ",
    choice2: "Being out after a black only curfew",
    choice3: "Bombing government targets",
    choice4: "All of the Above",
    answer: "All of the Above",
    gif: "http://www.unilotto.co.uk/wp/wp-content/uploads/2014/09/animated-gif-music.gif"


  }, {
    question: "When was Nelson Mandella first arrested",
    choice1: "1956",
    choice2: "1962",
    choice3: "1952",
    choice4: "None of the above",
    answer: "1956",
    gif: "http://static.tumblr.com/339c7786daca2dcaabc46c7c5f89456c/9puuwal/lfSmiswqs/tumblr_static_tumblr_mi2gis5pns1s15odto1_500.gif"
  }, {
    question: "Why were 69 people killed in the Sharpville Massacre",
    choice1: "They were protesting black only living",
    choice2: "They didn't have their passbooks due to protest and a riot broke out",
    choice3: "There was a terrorist attack against the blacks",
    choice4: "None of the above",
    answer: "They didn't have their passbooks due to protest and a riot broke out",
    gif: "http://www.netanimations.net/Colorful-musical-notes-zoom-past-you.gif"
  }, {
    question: "When did Apartheid end",
    choice1: "1990",
    choice2: "1996",
    choice3: "1994",
    choice4: "1992",
    answer: "1994",
    gif: "http://media2.giphy.com/media/jt7bAtEijhurm/giphy.gif"
  }];


  function start() {
    //currentlvl = 0;
    loadlvl();

  }

  // Load level
  function loadlvl() {
    var lvl = levels[currentlvl];
    // Set Question

    questions.innerHTML = lvl.question;

    // Set buttons
    first.innerHTML = lvl.choice1;
    second.innerHTML = lvl.choice2;
    third.innerHTML = lvl.choice3;
    fourth.innerHTML = lvl.choice4;

    // Increase points
    add.innerHTML++;


    //document.body.style.backgroundImage = 'url(' + lvl.gif + ')';
    if (currentlvl == 0) {

      //SCM.play();

    }
    else {

      //SCM.next();

    }
  }

  // Timer
  var interval = setInterval(function count() {

    time.innerHTML--;
    if (time.innerHTML == 0) {

      clearInterval(interval);
      lose();
    }

  }, 1000);


  (function checks(button) {
    var lvl = levels[currentlvl];

    if (button.innerHTML === lvl.answer) {
      if (currentlvl == levels.length - 1) {
        console.log("You win");
        //location.href="http://output.jsbin.com/tifegiwemo/1/";

      }
      else {
        currentlvl++;
        loadlvl();
        console.log("lol");
      }


    }
    else {
      lose();
      console.log("wrong");
      // SCM.pause();
    }





  });

  function win() {

    console.log("win!");
  }



  function lose() {
    var player = document.getElementById("scmframe");
    if (player)
      player.remove();

    console.log("LOSE");

  }






  start();

});
