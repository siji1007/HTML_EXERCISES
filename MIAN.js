// add hovered class to selected list item
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

// Define the content for each attribute (you can replace this with your actual content)
const attributeContent = {
    Attributes: document.getElementById("Attributes-exercises").innerHTML,
    Headings: document.getElementById("Headings-exercises").innerHTML,
    Paragraph: document.getElementById("Paragraph-exercises").innerHTML,
    Styles : document.getElementById("Styles-exercises").innerHTML

  
};

// Initially hide the content for Attributes
contentArea.innerHTML = "";

// Add click event listeners to sidebar items
sidebarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the text of the clicked item
        const itemText = item.textContent.trim();

        // Update the content area with the corresponding content
        contentArea.innerHTML = attributeContent[itemText];
    });
});



