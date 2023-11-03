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
  ExerciseArea.innerHTML = " " ;

  // Define the content for each attribute (you can replace this with your actual content)
  const attributeContent = {
    Attributes: document.getElementById("Attributes-exercises").innerHTML,
    Headings: document.getElementById("Headings-exercises").innerHTML,
    // Add more content for other sections here
  };

  contentArea.innerHTML = "";
  sidebarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const itemText = item.textContent.trim();
      navigation.classList.remove("active");
      main.classList.remove("active");
     
      contentArea.innerHTML = attributeContent[itemText]; // Hide the content of ExerciseArea
      console.log(ExerciseArea);
    });
  });

  const exercise1Button = document.getElementById("exercise1-button");


  console.log(exercise1Button);
  // You can add event listeners for the remaining buttons similarly
});

