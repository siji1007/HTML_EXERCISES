
const exerciseContent = {
  'AttributesExercise1': document.getElementById("AttributesExercise1").innerHTML,
  'AttributesExercise2': document.getElementById("AttributesExercise2").innerHTML,
  'AttributesExercise3': document.getElementById("AttributesExercise3").innerHTML,
  'AttributesExercise4': document.getElementById("AttributesExercise4").innerHTML,
  'AttributesExercise5': document.getElementById("AttributesExercise5").innerHTML,


  'HeadingExercise1' : document.getElementById("HeadingExercise1").innerHTML,
  'HeadingExercise2' : document.getElementById("HeadingExercise2").innerHTML,
  'HeadingExercise3' : document.getElementById("HeadingExercise3").innerHTML,
  'HeadingExercise4' : document.getElementById("HeadingExercise4").innerHTML,
  'HeadingExercise5' : document.getElementById("HeadingExercise5").innerHTML,


  'ParagraphExercise1' : document.getElementById("ParagraphExercise1").innerHTML,
 

  'StylesExercise1' : document.getElementById("StylesExercise1").innerHTML,
  'StylesExercise2' : document.getElementById("StylesExercise2").innerHTML,
  'StylesExercise3' : document.getElementById("StylesExercise3").innerHTML,
  'StylesExercise4' : document.getElementById("StylesExercise4").innerHTML,
  'StylesExercise5' : document.getElementById("StylesExercise5").innerHTML,

  'ClassesExercise1' : document.getElementById("ClassesExercise1").innerHTML,
  'ClassesExercise2' : document.getElementById("ClassesExercise2").innerHTML,
  'ClassesExercise3' : document.getElementById("ClassesExercise3").innerHTML,
  'ClassesExercise4' : document.getElementById("ClassesExercise4").innerHTML,
  'ClassesExercise5' : document.getElementById("ClassesExercise5").innerHTML,


  
};

document.addEventListener("DOMContentLoaded", function () {
  var ExerciseArea = document.querySelector(".exercises-content");  
  ExerciseArea.innerHTML = "";

  var HeadingExercise_contents = document.querySelector(".HeadingExercise_contents");
  HeadingExercise_contents.innerHTML = "";

  var ParagraphExercise_contents = document.querySelector(".ParagraphExercise_contents");
  ParagraphExercise_contents.innerHTML = "";

  var Styles_exercises_content = document.querySelector(".Styles-exercises-content");
  Styles_exercises_content.innerHTML ="";

  var Classes_exercises_content=document.querySelector(".Classes-exercises-content");
  Classes_exercises_content.innerHTML ="";

  var LinksExercise_content = document.querySelector(".LinksExercise_content");
  LinksExercise_content.innerHTML=""

  var ImagesExercise_content = document.querySelector(".ImagesExercise_content");
  ImagesExercise_content.innerHTML =""

  var FormsElemets_exercises = document.querySelector(".Forms_exercises-content");
  FormsElemets_exercises.innerHTML =""

  var IFframeExercise_content = document.querySelector(".IFframeExercise_content");
  IFframeExercise_content.innerHTML =""


  let list = document.querySelectorAll(".navigation li");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }

  list.forEach((item) => 
  item.addEventListener("click", activeLink));


  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");

  let main = document.querySelector(".main");

  toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };
  const sidebarItems = document.querySelectorAll(".sidebar-container li");
  const contentArea = document.querySelector(".content");

  const attributeContent = {
    Attributes: document.getElementById("Attributes-exercises").innerHTML,
    Headings: document.getElementById("Headings-exercises").innerHTML,
    Paragraph: document.getElementById("Paragraph-exercises").innerHTML,
    Styles: document.getElementById("Styles-exercises").innerHTML,
    Formatting: document.getElementById("Formatting-exercises").innerHTML,
    Quotations: document.getElementById("Quotations-exercises").innerHTML,
    Comments: document.getElementById("Comments-exercises").innerHTML,
    CSS: document.getElementById("Css-exercises").innerHTML,
    Links: document.getElementById("Links-exercises").innerHTML,
    Images: document.getElementById("Images-exercises").innerHTML,
    Tables: document.getElementById("Tables-exercises").innerHTML,
    List: document.getElementById("List-exercises").innerHTML,
    Classes: document.getElementById("Classes-exercises").innerHTML,
    ID: document.getElementById("ID-exercises").innerHTML,
    IFframe: document.getElementById("IFframe-exercises").innerHTML,
    Scripts: document.getElementById("Scripts-exercises").innerHTML,
    Computer_Code: document.getElementById("CC-exercises").innerHTML,
    Forms: document.getElementById("Forms-exercises").innerHTML,
    Forms_Attributes: document.getElementById("FormsAttri-exercises").innerHTML,
    Forms_Elements: document.getElementById("FormsElemets-exercises").innerHTML,
    Input_Types: document.getElementById("InputType-exercises").innerHTML,
    Input_Attributes: document.getElementById("InputAtt-exercises").innerHTML,
  
    
  };

  contentArea.innerHTML = " ";
 
  sidebarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const itemText = item.textContent.trim();
      navigation.classList.remove("active");
      main.classList.remove("active");
      contentArea.innerHTML = attributeContent[itemText];

    });
  });
});


function Test(exercise) {
  var ExerciseArea = document.querySelector(".exercises-content");
  var HeadingExercise_contents = document.querySelector(".HeadingExercise_contents");
  var ParagraphExercise_contents = document.querySelector(".ParagraphExercise_contents");
  var Styles_exercises_content = document.querySelector(".Styles-exercises-content");
  var Classes_exercises_content=document.querySelector(".Classes-exercises-content");
  var LinksExercise_content = document.querySelector(".LinksExercise_content")


  if (exerciseContent.hasOwnProperty(exercise)) {
    if (ExerciseArea) {
      ExerciseArea.innerHTML = exerciseContent[exercise];
    } else if (HeadingExercise_contents) {
      HeadingExercise_contents.innerHTML = exerciseContent[exercise];
    }else if (ParagraphExercise_contents){
      ParagraphExercise_contents.innerHTML = exerciseContent[exercise];
    }else if(Styles_exercises_content){
      Styles_exercises_content.innerHTML = exerciseContent[exercise];
    }else if(Classes_exercises_content){
      Classes_exercises_content.innerHTML = exerciseContent[exercise];
    }else if (LinksExercise_content){
      LinksExercise_content.innerHTML = exerciseContent[exercise];
    }




  } else {
    if (ExerciseArea) {
      ExerciseArea.innerHTML = '';
    }
    if (HeadingExercise_contents) {
      HeadingExercise_contents.innerHTML = '';
    }
    if(ParagraphExercise_contents){
      ParagraphExercise_contents.innerHTML='';
    }
  }
}

const AttributesexerciseAnswers = {
  'AttributesExercise1': 'metadata',
  'AttributesExercise2': 'alt',
  'AttributesExercise3': 'attribute',
  'AttributesExercise4': 'rows',
  'AttributesExercise5': 'url'
};


const exercisesId_array = [];
function toggleAnswer(exercise) {
const answer = AttributesexerciseAnswers[exercise];
const submitButton = document.querySelector(`.submit`);
if (answer) {
// Get the input element with the id "UserAnswer"
const inputElement = document.getElementById('UserAnswer');

if (inputElement) {
    if (inputElement.value === '') {
        inputElement.value = answer;
        submitButton.disabled = true;
        
    } else {
        inputElement.value = '';
        submitButton.disabled = false;
     
    }
}
}
}

function submit(exercise, questionId) {
var button = document.getElementById(exercise);

const answer = AttributesexerciseAnswers[exercise];
const userInput = document.getElementById("UserAnswer");
var ExerciseArea = document.querySelector(".exercises-content");
if(answer === 'metadata'){
    if(answer === userInput.value.toLowerCase()){
        document.getElementById("AttributesExerciseDOne1").style.backgroundColor = 'green'; 
        alert(answer +' is correct!');
        ExerciseArea.innerHTML = exerciseContent['AttributesExercise2']
        if (!(exercisesId_array.includes(questionId))){
        progress(questionId);
        }
    }
    else if (userInput.value === ''){
        alert("Please fill the black before you submit.")
    }
    else{
        alert(userInput.value + ' is wrong.');
    }
}

else if(answer === 'alt'){
    if (answer === userInput.value.toLowerCase()){
        document.getElementById("AttributesExerciseDOne2").style.backgroundColor = 'green'; 
        alert(answer +' is correct!');
        ExerciseArea.innerHTML = exerciseContent['AttributesExercise3']
        if (!(exercisesId_array.includes(questionId))){
          progress(questionId);
          }
    }
    else if (userInput.value === ''){
        alert("Please fill the black before you submit.")
    }
    else{
        alert( userInput.value+ ' is wrong.');
    }
}

else if(answer === 'attribute'){
    if (answer === userInput.value.toLowerCase()){
        alert(answer +' is correct!');
        document.getElementById("AttributesExerciseDOne3").style.backgroundColor = 'green'; 
        ExerciseArea.innerHTML = exerciseContent['AttributesExercise4']
        if (!(exercisesId_array.includes(questionId))){
          progress(questionId);
          }
    }
    else if (userInput.value === ''){
        alert("Please fill the black before you submit.")
    }
    else{
        alert(userInput.value + ' is wrong.');
        
    }
}

else if(answer === 'rows'){
    if (answer === userInput.value.toLowerCase()){
        alert(answer +' is correct!');
        document.getElementById("AttributesExerciseDOne4").style.backgroundColor = 'green'; 
        ExerciseArea.innerHTML = exerciseContent['AttributesExercise5']
        if (!(exercisesId_array.includes(questionId))){
          progress(questionId);
          }
    }
    else if (userInput.value === ''){
        alert("Please fill the black before you submit.")
    }
    else{
        alert(userInput.value+ ' is wrong.');
 
    }
}

else if(answer === 'url'){
    if (answer === userInput.value.toLowerCase()){
        alert(answer +' is correct!');
        document.getElementById("AttributesExerciseDOne5").style.backgroundColor = 'green'; 
        HeadingExercise_contents.innerHTML = exerciseContent[exercise];
        if (!(exercisesId_array.includes(questionId))){
          progress(questionId);
          }
    }
    else if (userInput.value === ''){
        alert("Please fill the black before you submit.")
    }
    else{
        alert(userInput.value + ' is wrong.');
    }
}

}

var done_exercises = 0;
function progress(exercisesId){
  progressBar = document.getElementById("progressId");
  done_exercises++;
  progressBar.textContent = "Finished exercises: " + done_exercises.toString() + "/110";
  exercisesId_array.push(exercisesId);
}



