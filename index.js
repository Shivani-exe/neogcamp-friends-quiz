var readlineSync = require("readline-sync");
var score=0;
var username = readlineSync.question("Who are you? ");

const chalk = require('chalk');
console.log(chalk.redBright("Hi "+username+" Welcome to Shivani's Friends quiz"));

var highScore=[
  {
    name: "Shivani",
    score:10
  },
  {
   name: "Harshi",
   score:9
  }
];

function play(question,answer,answer1,answer2,answer3)
{
    console.log(chalk.blueBright(question));
    console.log(chalk.green(answer1));
    console.log(chalk.yellow(answer2));
    console.log(chalk.magentaBright(answer3));
     
    var userAnswer= readlineSync.question(chalk.cyan("Your answer "));
    
    

    if(userAnswer === answer){
      console.log("YAY!! you are right");
      score= score + 1;

    }
    else{
      console.log("NAY!! you are wrong");
      
    }
    console. log("current score ", score);
    console.log("---------------");
}

var questionBank=[
  {
    question:"Q1.What year did Friends first start?",
    answer:"a",
    answer1:"a. 1994",
    answer2:"b. 1995",
    answer3:"c. 1996"
  },
  {
    question:"Q2.How many pages was Rachel’s letter to Ross about the reasons for their break-up?",
    answer:"c",
    answer1:"a. 20",
    answer2:"b. 16",
    answer3:"c. 18"
  },
  {
    question:"Q3.What’s Joey’s penguin’s name?",
    answer:"b",
    answer1:"a. Teddy",
    answer2:"b. Hugsy",
    answer3:"c. Betty"
  },
  {
    question:"Q4.What plastic surgery did Rachel admit to having?",
    answer:"a",
    answer1:"a. nose",
    answer2:"b. chin",
    answer3:"c. lips"
  },
  {
    question:"Q5.Monica and Chandler Bing become an item in series 4, after spending the night together in which city?",
    answer:"b",
    answer1:"a. Paris",
    answer2:"b. London",
    answer3:"c. LA"
  },
  {
    question:"Q6. What is the full name of Brad Pitt’s character in ‘The One with the Rumor?",
    answer:"c",
    answer1:"a. Thomas",
    answer2:"b. Peter",
    answer3:"c. Will"
  },
  {
    question:"Q7. Maggie Wheeler played which long time recurring character?",
    answer:"a",
    answer1:"a. Janice",
    answer2:"b. Emily",
    answer3:"c. Emma"
  },
  {
    question:"Q8.What does Joey make Chandler do to apologise for kissing Cathy?",
    answer:"a",
    answer1:"a. Lie in a box in silence",
    answer2:"b. Locked in a cupboard",
    answer3:"c. Threw him out of the apartment"
  },
  {
    question:"Q9.Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?",
    answer:"c",
    answer1:"a. Denmark",
    answer2:"b. Spain",
    answer3:"c. Italy"
  },
  {
    question:"Q10. What was Monica's apartment number?",
    answer:"c",
    answer1:"a. 10",
    answer2:"b. 4",
    answer3:"c. 20"
  }


  
  

  
];
for (var i=0;i<questionBank.length;i++)
{
  var currentQuestion=questionBank[i];
  play(currentQuestion.question,
  currentQuestion.answer,
  currentQuestion.answer1,
  currentQuestion.answer2,
  currentQuestion.answer3)

}
console.log("Total score ", score);
if(score === 10)
{
 console.log(chalk.bold.rgb(10, 100, 200)("YOU ARE THE BIGGEST FRIENDS FAN!!!!!!! :)"));
}

console.log("Check out the high scores, if you should be there ping me and I'll update it");
for(var i=0;i<highScore.length;i++)
{
  var currentscore=highScore[i];
  console.log(currentscore.name);
  console.log(currentscore.score);
}
