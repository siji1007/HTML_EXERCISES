
const exerciseContent = {
  'AttributesExercise1': document.getElementById("AttributesExercise1").innerHTML,
  'AttributesExercise2': document.getElementById("AttributesExercise2").innerHTML,
  'AttributesExercise3': document.getElementById("AttributesExercise3").innerHTML,
  // Add more content for other exercises here
};

function Test(exercise) {
  const ExerciseArea = document.querySelector(".exercises-content");
  console.log(exercise);

  if (exerciseContent.hasOwnProperty(exercise)) {
      ExerciseArea.innerHTML = exerciseContent[exercise];
  } else {
      ExerciseArea.innerHTML = 'Exercise not found';
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // add hovered class to the selected list item
  let list = document.querySelectorAll(".navigation li");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }

  list.forEach((item) => item.addEventListener("mouseover", activeLink));

  // Menu Toggle
  let toggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");

  toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  // Get the sidebar items
  const sidebarItems = document.querySelectorAll(".sidebar-container li");

  // Get the content area
  const contentArea = document.querySelector(".content");

  const ExerciseArea = document.querySelector(".exercises-content");
  ExerciseArea.innerHTML = " ";

  // Define the content for each attribute (you can replace this with your actual content)
  const attributeContent = {
    Attributes: document.getElementById("Attributes-exercises").innerHTML,
    Headings: document.getElementById("Headings-exercises").innerHTML,
    // Add more content for other sections here
    
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






 
