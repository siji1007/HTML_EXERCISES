
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
  'ParagraphExercise2' : document.getElementById("ParagraphExercise2").innerHTML,
  'ParagraphExercise3' : document.getElementById("ParagraphExercise3").innerHTML,
  'ParagraphExercise4' : document.getElementById("ParagraphExercise4").innerHTML,
  'ParagraphExercise5' : document.getElementById("ParagraphExercise5").innerHTML,

  'StylesExercise1' : document.getElementById("StylesExercise1").innerHTML,
  'StylesExercise2' : document.getElementById("StylesExercise2").innerHTML,
  'StylesExercise3' : document.getElementById("StylesExercise3").innerHTML,
  'StylesExercise4' : document.getElementById("StylesExercise4").innerHTML,
  'StylesExercise5' : document.getElementById("StylesExercise5").innerHTML,

  'QuotationsExercise1' : document.getElementById("QuotationsExercise1").innerHTML,
  'QuotationsExercise2' : document.getElementById("QuotationsExercise2").innerHTML,
  'QuotationsExercise3' : document.getElementById("QuotationsExercise3").innerHTML,
  'QuotationsExercise4' : document.getElementById("QuotationsExercise4").innerHTML,
  'QuotationsExercise5' : document.getElementById("QuotationsExercise5").innerHTML,



  'CommentsExercise1' : document.getElementById("CommentsExercise1").innerHTML,
  'CommentsExercise2' : document.getElementById("CommentsExercise2").innerHTML,
  'CommentsExercise3' : document.getElementById("CommentsExercise3").innerHTML,
  'CommentsExercise4' : document.getElementById("CommentsExercise4").innerHTML,
  'CommentsExercise5' : document.getElementById("CommentsExercise5").innerHTML,
  
  'InputTypesExercise1' : document.getElementById("InputTypesExercise1").innerHTML,
  'InputTypesExercise2' : document.getElementById("InputTypesExercise2").innerHTML,
  'InputTypesExercise3' : document.getElementById("InputTypesExercise3").innerHTML,
  'InputTypesExercise4' : document.getElementById("InputTypesExercise4").innerHTML,
  'InputTypesExercise5' : document.getElementById("InputTypesExercise5").innerHTML,

   
  'CssExercise1' : document.getElementById("CssExercise1").innerHTML,
  'CssExercise2' : document.getElementById("CssExercise2").innerHTML,
  'CssExercise3' : document.getElementById("CssExercise3").innerHTML,
  'CssExercise4' : document.getElementById("CssExercise4").innerHTML,
  'CssExercise5' : document.getElementById("CssExercise5").innerHTML,

  'ClassesExercise1' : document.getElementById("ClassesExercise1").innerHTML,
  'ClassesExercise2' : document.getElementById("ClassesExercise2").innerHTML,
  'ClassesExercise3' : document.getElementById("ClassesExercise3").innerHTML,
  'ClassesExercise4' : document.getElementById("ClassesExercise4").innerHTML,
  'ClassesExercise5' : document.getElementById("ClassesExercise5").innerHTML,
  
  'FormsExercise1' : document.getElementById("FormsExercise1").innerHTML,
  'FormsExercise2' : document.getElementById("FormsExercise2").innerHTML,
  'FormsExercise3' : document.getElementById("FormsExercise3").innerHTML,
  'FormsExercise4' : document.getElementById("FormsExercise4").innerHTML,
  'FormsExercise5' : document.getElementById("FormsExercise5").innerHTML,

  'FormsAttriExercise1' : document.getElementById("FormsAttriExercise1").innerHTML,
  'FormsAttriExercise2' : document.getElementById("FormsAttriExercise2").innerHTML,
  'FormsAttriExercise3' : document.getElementById("FormsAttriExercise3").innerHTML,
  'FormsAttriExercise4' : document.getElementById("FormsAttriExercise4").innerHTML,
  'FormsAttriExercise5' : document.getElementById("FormsAttriExercise5").innerHTML,

  'FormsElemetsExercise1' : document.getElementById("FormsElemetsExercise1").innerHTML,
  'FormsElemetsExercise2' : document.getElementById("FormsElemetsExercise2").innerHTML,
  'FormsElemetsExercise3' : document.getElementById("FormsElemetsExercise3").innerHTML,
  'FormsElemetsExercise4' : document.getElementById("FormsElemetsExercise4").innerHTML,
  'FormsElemetsExercise5' : document.getElementById("FormsElemetsExercise5").innerHTML,
  
  'InputAttriExercise1' : document.getElementById("InputAttriExercise1").innerHTML,
  'InputAttriExercise2' : document.getElementById("InputAttriExercise2").innerHTML,
  'InputAttriExercise3' : document.getElementById("InputAttriExercise3").innerHTML,
  'InputAttriExercise4' : document.getElementById("InputAttriExercise4").innerHTML,
  'InputAttriExercise5' : document.getElementById("InputAttriExercise5").innerHTML,




  
};

document.addEventListener("DOMContentLoaded", function () {
  var ExerciseArea = document.querySelector(".exercises-content");  
  ExerciseArea.innerHTML = "";

  var HeadingExercise_contents = document.querySelector(".HeadingExercise_contents");
  HeadingExercise_contents.innerHTML = "";
  
  var CommentsExercise_contents = document.querySelector(".CommentsExercise_contents");
  CommentsExercise_contents.innerHTML = "";

  var ParagraphExercise_contents = document.querySelector(".ParagraphExercise_contents");
  ParagraphExercise_contents.innerHTML = "";

  var Styles_exercises_content = document.querySelector(".Styles_exercises_content");
  Styles_exercises_content.innerHTML = "";
  
  var InputTypesExercise_contents = document.querySelector(".InputTypesExercise_contents");
  InputTypesExercise_contents.innerHTML = "";

  var CssExercise_content = document.querySelector(".CssExercise_content");
  CssExercise_content.innerHTML = "";

  var ImagesExercise_content = document.querySelector(".ImagesExercise_content");
  ImagesExercise_content.innerHTML ="";

  var IFframeExercise_content = document.querySelector(".IFframeExercise_content");
  IFframeExercise_content.innerHTML ="";

  var LinksExercise_content = document.querySelector(".LinksExercise_content");
  LinksExercise_content.innerHTML ='';

  var Classes_exercises_content = document.querySelector(".Classes_exercises_content");
  Classes_exercises_content.innerHTML = "";

  var InputAttri_content = document.querySelector(".InputAttri_content");
  InputAttri_content.innerHTML = "";

  var quotationExercise_content = document.querySelector(".quotationExercise-content");
  quotationExercise_content.innerHTML=""

  var FormsExercises_content = document.querySelector(".FormsExercises_content");
  FormsExercises_content.innerHTML = "";

  var FormsAttriExercises_content = document.querySelector(".FormsAttriExercises_content");
  FormsAttriExercises_content.innerHTML = "";

  var Forms_exercises_content = document.querySelector(".Forms_exercises_content");
  Forms_exercises_content.innerHTML = "";

  var idExercise_content = document.querySelector(".idExercise-content");
  idExercise_content.innerHTML ="";

  var scriptsExercise_content = document.querySelector(".scriptsExercise-content");
  scriptsExercise_content.innerHTML="";

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
  var Styles_exercises_content = document.querySelector(".Styles_exercises_content");
  var CommentsExercise_contents = document.querySelector(".CommentsExercise_contents");
  var InputTypesExercise_contents = document.querySelector(".InputTypesExercise_contents");
  var CssExercise_content = document.querySelector(".CssExercise_content");
  var Classes_exercises_content = document.querySelector(".Classes_exercises_content");
  var FormsExercises_content = document.querySelector(".FormsExercises_content");
  var InputAttri_content = document.querySelector(".InputAttri_content");
  var FormsAttriExercises_content = document.querySelector(".FormsAttriExercises_content");
  var Forms_exercises_content = document.querySelector(".Forms_exercises_content");
  var quotationExercise_content = document.querySelector(".quotationExercise-content");



  if (exerciseContent.hasOwnProperty(exercise)) {
    if (ExerciseArea) {
      ExerciseArea.innerHTML = exerciseContent[exercise];
    } else if (HeadingExercise_contents) {
      HeadingExercise_contents.innerHTML = exerciseContent[exercise];
    } else if (Styles_exercises_content) {
      Styles_exercises_content.innerHTML = exerciseContent[exercise];
    } else if (CommentsExercise_contents) {
      CommentsExercise_contents.innerHTML = exerciseContent[exercise];
    } else if (InputTypesExercise_contents) {
      InputTypesExercise_contents.innerHTML = exerciseContent[exercise];
    } else if (CssExercise_content){
     CssExercise_content.innerHTML = exerciseContent[exercise];
    } else if (Classes_exercises_content){
      Classes_exercises_content.innerHTML = exerciseContent[exercise];
    } else if (FormsExercises_content) {
     FormsExercises_content.innerHTML = exerciseContent[exercise];
    }else if (InputAttri_content){
      InputAttri_content.innerHTML = exerciseContent[exercise];
    } else if (FormsAttriExercises_content) {
      FormsAttriExercises_content.innerHTML = exerciseContent[exercise];
    } else if (Forms_exercises_content) {
      Forms_exercises_content.innerHTML = exerciseContent[exercise];
    }else if (quotationExercise_content){
      quotationExercise_content.innerHTML = exerciseContent[exercise]
    }



  } else {
    if (ExerciseArea) {
      ExerciseArea.innerHTML = '';
    }
    if (HeadingExercise_contents) {
      HeadingExercise_contents.innerHTML = '';
    }
    if (Styles_exercises_content) {
      Styles_exercises_content.innerHTML = '';
    }
    if (CommentsExercise_contents) {
      CommentsExercise_contents.innerHTML = '';
    }
    if (InputTypesExercise_contents) {
      InputTypesExercise_contents = '';
    }
    if (CssExercise_content){
      CssExercise_content.innerHTML = '';
    }
    if (Classes_exercises_content){
      Classes_exercises_content.innerHTML = '';
    }
    if (FormsExercises_content) {
      FormsExercises_content.innerHTML = '';
    }
    if (InputAttri_content){
      InputAttri_content.innerHTML = '';
    }
    if (FormsAttriExercises_content) {
      FormsAttriExercises_content.innerHTML = '';
    }
    if (Forms_exercises_content){
      Forms_exercises_content.innerHTML = '';
    }
    
  }
}

var isHidden = true;
function toggleAnswer(questionId, hideShowButtonId, submitButtonId) {
  // Get specific button element by ID
  var hideShowButton = document.getElementById(hideShowButtonId);

  // Get specific question by ID
  var thisQuestionId = document.getElementById(questionId);
  
  // Get answer value of the specific question
  var ans = thisQuestionId.getAttribute("ansValue");
  
  // Get the input element
  if (isHidden === true){
    // Configure button text to show answer
    hideShowButton.textContent = 'Hide Answer';
    
    var inputElement = document.querySelector('input[name="attribute_info"]');

    // Set the value of the input element to the correct answer
    inputElement.value = ans;
    
    // Disable the input to prevent further editing
    inputElement.setAttribute('disabled', 'true');

    // Disable submit button to prevent submitting answer from show answer
    document.getElementById(submitButtonId).disabled = true;
    isHidden = false;
  } else {
    // Configure button text to show answer
    hideShowButton.textContent = 'Show Answer';
    var inputElement = document.querySelector('input[name="attribute_info"]');
    // Set the value of the input element to the correct answer
    inputElement.value = '';
    
    // Disable the input to prevent further editing
    inputElement.removeAttribute('disabled');
    
    //Enable submit button to allow user submit their own answer
    document.getElementById(submitButtonId).disabled = false;
    isHidden = true;
  }     
}

const exercisesId_array = [];
function checkAnswer(id,questionId, inputId){
  var element = document.getElementById(id); // Get the element by ID

  var thisQuestionId = document.getElementById(questionId);
  var ans = thisQuestionId.getAttribute("ansValue");
  var userAsnwer = document.getElementById(inputId).value;
 
  
  // Checks if user input is not null or empty string
  if (userAsnwer === '' || userAsnwer === 'null'){
      alert("You cannot submit an empty answer. Try again.");
  } else{
    // Checks if user input is same with set correct answer
    if (!(ans === userAsnwer)){
      element.style.backgroundColor = 'red'; 
    } else { 
      element.style.backgroundColor = 'green';    
        if (!(exercisesId_array.includes(questionId))){
        progress(questionId);
      }
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
