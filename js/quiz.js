// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ["Which planet is closest to the sun?", "Mercury"],
    ["How many players are there in a football team?", "11"],
    ["What planet do you live on?", "Earth"],
    ["An emu can fly (choose: true/false)", "false"],
    ["What color is the sky?", "blue"],
    ["A woman has walked on the Moon (choose: true/false)", "false"],
    ["How many days does it take for the Earth to orbit the Sun?", "365"],
    ["What’s the capital of Canada?", "Ottawa"],
    ["When was  the World Wide Web invented?", "1990"],
    ["What city do The Beatles come from?", "Liverpool"]
];

// 2. Store the number of questions answered correctly
let correctAnswers = 0;

const correct = [];
const incorrect = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
      - Divide questions answered right and wrong
*/

for (let i=0; i < questions.length; i++){
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if(response.toLowerCase() === answer.toLowerCase()){
        correctAnswers++;
        correct.push(question);
    } else {
        incorrect.push(question);
    }
}

//4. Create list of questions
function createListItems(arr){
    let items = "";
    for (let i=0; i < arr.length; i++){
        items+= `<li>${arr[i]}</li>`;
    }
    return items;
}
