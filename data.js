const questions = [
  "Are you working on your chosen field?",
  "How many hours a week do you work?",
  " What does your job entail? (For example, do you often travel for business, work at home, performs dangerous tasks?)",
  " What is your dream job?",
  "Have you ever been called a workaholic?",
  " What is your retirement plan? What do you plan to do when you stop working?",
  "Have you ever been fired?",
  "Have you ever quit a job suddenly? Have you changed jobs a lot?",
  "Do you consider your work a career or just a job?",
  " Has your work ever been a factor in the breakup of a relationship?",
  "If you could live anywhere in the world, where would it be?",
  "Do you prefer urban, suburban, or rural settings?",
  "Is it important to have your own private home, or do you prefer apartment or condo living, with a management company responsible for the maintenance?",
  "Are you a do-it yourselfer, or would you rather hire professionals?",
  " Do you prefer to clean your own home or hire a housekeeper?",
  "Is quiet important in your home, or do you prefer having music or some background noise most of the time? ",
  "Is it important to have a TV in the bedroom? Living room? Kitchen?",
  " Do you like to sleep with the TV or radio on?",
  " How important is it for you to have a space in your home that is yours alone?",
  " Have differences about home style ever been a factor in the breakup of a relationship?",
  "If you had unlimited resources, how would you live?",
  "How important is it for you to make a lot of money?",
  "What is your annual income?",
  "Do you pay alimony or child support?",
  "Do you believe in prenuptial agreements? Under what circumstances?",
  "Do you believe in establishing a family budget?",
  " Should individuals within a marriage have separate bank accounts in addition to joint accounts?",
  "Do you feel that bills should be divided based on a percentage of each person’s salary?",
  "Who should handle the finances in your family?",
  " Do you have significant debts?",
  " Do you gamble?",
  " Did you have a paying job when you were in high school? Before high school?",
  "Have you ever been called cheap or stingy?",
  " Do you believe that a certain amount of money should be set aside for pleasure, even if you’re on a tight budget?",
  "Have you ever used money as a way of controlling a relationship?",
  "Has anyone ever tried to control you with money?",
  " Has money ever been a factor for you in the breakup of a relationship?",
];
const button = document.getElementById("btn");
const body = document.querySelector("body");
const infoClickBelow = document.getElementById("text");
const insertQuestion = document.getElementById("insertQuestion");

function buttonClicked() {
  infoClickBelow.setAttribute("style", "display:none");
  insertQuestion.style.display = "";

  let randomNumber = Math.floor(Math.random() * questions.length);
  let randomQuestion = document.createTextNode(questions[randomNumber]);
  insertQuestion.innerHTML = "";
  insertQuestion.appendChild(randomQuestion);
}

button.addEventListener("click", buttonClicked);
