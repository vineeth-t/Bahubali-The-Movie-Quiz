var readLineSync= require('readline-sync');
const chalk=require('chalk');
var score=0;

//leaderboard
var leaderBoard=[{
  name:'Pavant',
  score:'11'

},{
  name:'Vineeth',
  score:'10'
},{
  name:'Sailesh',
  score:'9'
}]

//function definition
function questiontype(question,answer){
  console.log(chalk.cyanBright(question));
  var index=readLineSync.question(chalk.yellow("Enter Your Answer: "));
  if(index===answer){
    console.log(chalk.green('Congrats,Your answer is correct!!'));
    score++;
    console.log(chalk.bgRedBright('Current Score '+ score));
    console.log('\n');
  }else{
    console.log(chalk.red('oops!! wrong answer.'));
    console.log(chalk.green('Answer: '+answer));
    console.log(chalk.bgRedBright('Current Score '+ score));
    console.log('\n');
  }
}

//Declaring a question.
var questionOne={
  question:'Who is hero of the movie Bahubali?'+'\n'+"a)Rana"+'\n'+"b)Suriya "+'\n'+"c)Prabhas"+'\n'+"d)Nani",
  answer:"c"
}
var questionTwo={
  question:'Who is the music director of Bahubali_2?'+'\n'+"a)M.M keeravani"+'\n'+"b)S.S Rajamouli "+'\n'+"c)Kaala Bhairava"+'\n'+"d)DSp",
  answer:"a"
}
var questionThree={
  question:'Bahubali-2 was released in ?'+'\n'+"a)2020"+'\n'+"b)2019 "+'\n'+"c)2017"+'\n'+"d)2015",
  answer:"c"
}
var questionFour={
  question:'Who played the role	Kattappa ?'+'\n'+"a)Sathyaraj"+'\n'+"b)Hari Krishna "+'\n'+"c)Shri Hari"+'\n'+"d)advi shesh",
  answer:"a"
}
var questionFifth={
  question:'What was the Language of kalakeyas in the movie Bahubali?'+'\n'+"a)Kiliki"+'\n'+"b)Hindi "+'\n'+"c)urdu"+'\n'+"d)Telugu",
  answer:"a"
}
var questionSixth={
question:'Who played the role of Queen Devasena?'+'\n'+"a)Anushka Shetty"+'\n'+"b)Anushka sharma "+'\n'+"c)Alia"+'\n'+"d)kajal",
  answer:"a"
}
var questionSeventh={
  question:'Who is the Director of Bahubali The Begining?'+'\n'+"a)M.M Rajamouli"+'\n'+"b)S.S Rajamouli "+'\n'+"c)Trivikram"+'\n'+"d)Sukumar",
    answer:"b"
}
var questionEight={
   question:'where did the pre release Event of Bahubali-2 happened ?'+'\n'+"a)Ramoji Flim City"+'\n'+"b)Tirupathi "+'\n'+"c)Vijayawada"+'\n'+"d)Vizag",
    answer:"a"
}
var questionNine={
 question:'Who released Hindi dubbed version of Bahubali ?'+'\n'+"a)PvP"+'\n'+"b)Varahi"+'\n'+"c)Yash Raj Flims"+'\n'+"d)Dharma production",
    answer:"d"
}
var questionTen={
  question:'What is the Kingdom name of Bahubali?'+'\n'+"a)Bhairava Kota"+'\n'+"b)Mahishmati"+'\n'+"c)dweepam"+'\n'+"d)Kuntala Rajyam",
    answer:"b"
}
var questionEleven={
 question:'What is the next film of S.S Rajamouli'+'\n'+"a)Radhe shyam"+'\n'+"b)pushpa"+'\n'+"c)RRR"+'\n'+"d)PINK",
    answer:"c"
}

var questionArray=[questionOne,questionTwo,questionThree,questionFour,questionFifth,questionSixth,questionSeventh];

console.log(chalk.bgRedBright.whiteBright("*******Hi, Welcome to Bahubali Movie Quiz*******"));
console.log('\n');
console.log(chalk.bgBlack.green(
    'Please read the instructions given below'+'\n'+
    '1) Enter your Name to parctipate in the quiz'+'\n'+
    '2) Basic knowledge of Bahubali movie required'+'\n'+
    '3) Each question carries one mark(no negative marks for wrong answers)'+'\n'+
    '4) Press Enter after selecting the option'+'\n'+
    '5) There are two levels in the Quiz'+'\n'+
    '     i) level 1 for absolute beginner'+'\n'+
    '     ii)level 2 required some additional knowledge about South cinema.')+'\n'+chalk.bgRed('Note:you need to score atleast 5 marks for reaching level2')
          );
console.log('\n');
var UserName=readLineSync.question(chalk.bgBlack.whiteBright("Please enter Your name to participate in quiz :"));
console.log('\n');
console.log(chalk.bgRedBright('Welcome'+" "+UserName+'!'));
//showing leaderboard scores
if(readLineSync.keyInYN('Do you want to start the quiz?')){
 for(var i=0;i<questionArray.length;i++){
  questiontype(questionArray[i].question,questionArray[i].answer)
}
}else{
  console.log('Thank You');
}
if(score>=5){
  console.log('\n')
  console.log(chalk.bgRedBright('Your Total Score for level-1 is :'+ score +" You are eligible for Level 2"));
  console.log('\n')
  console.log(chalk.bgCyanBright.black('Welcome to Level-2'))
  var questionArray=[questionEight,questionNine,questionTen,questionEleven]
    if(readLineSync.keyInYN('Do you want to start the Level 2? ' )){
            for(var i=0;i<questionArray.length;i++){
            questiontype(questionArray[i].question,questionArray[i].answer,questionArray[i].optionsArr)
             }
  console.log('\n')
  console.log(chalk.bgRedBright('Your Total Score is :'+ score+'\n'+'Thank You For Participating in the Quiz'))
    }else{
      console.log('Thank You');
      console.log(chalk.bgRedBright('Your Total Score is :'+ score+'\n'+'Thank You For Participating in the Quiz'))
    }
}else{
 console.log(chalk.bgRedBright('Your Total Score is :'+ score+'\n'+'Thank You For Participating in the Quiz'))
}
console.log('\n'+'*------ScoreCard------*');
for(var i=0;i<leaderBoard.length;i++){
  
  console.log(chalk.yellow(leaderBoard[i].name+" - "+leaderBoard[i].score));
}
var flag=0
for(var i=0;i<leaderBoard.length;i++){
  if(score>=leaderBoard[i].score){
    console.log(chalk.green('\n'+'congratulations! '+UserName+' You have beaten the high score,send your score screenshot.We will update the scoreboard'))
    flag=1;
    console.log(chalk.green('\n'+'ThankYou. Have a Good day'))
    break;
  }
}
if(flag===0){
  console.log(chalk.green("Try Again for getting high score"));
}