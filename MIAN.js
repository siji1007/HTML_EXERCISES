
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
  
};

document.addEventListener("DOMContentLoaded", function () {


  var computerCode = document.getElementById("CC-exercises").innerHTML;
  console.log(computerCode);





  var ExerciseArea = document.querySelector(".exercises-content");  
  ExerciseArea.innerHTML = "";

  var HeadingExercise_contents = document.querySelector(".HeadingExercise_contents");
  HeadingExercise_contents.innerHTML = "";

  // add hovered class to the selected list item
  let list = document.querySelectorAll(".navigation li");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }

  list.forEach((item) => 
  item.addEventListener("click", activeLink));


  // Menu Toggle
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

  if (exerciseContent.hasOwnProperty(exercise)) {
    if (ExerciseArea) {
      ExerciseArea.innerHTML = exerciseContent[exercise];
    } else if (HeadingExercise_contents) {
      HeadingExercise_contents.innerHTML = exerciseContent[exercise];
    }


  } else {
    if (ExerciseArea) {
      ExerciseArea.innerHTML = '';
    }
    if (HeadingExercise_contents) {
      HeadingExercise_contents.innerHTML = '';
    }
  }
}





