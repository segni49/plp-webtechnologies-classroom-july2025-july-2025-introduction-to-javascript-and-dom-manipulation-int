
// Part 1: Variables & Conditionals


let defaultName = localStorage.getItem("userName") || "Guest";
let isLoggedIn = defaultName !== "Guest";


// Part 2: Custom Functions


// Function to display a message
function showMessage() {
  alert("Ubuntu means 'I am because we are'");
}

// Function to add items to the list
function addItemsToList(items) {
  const list = document.getElementById("itemList");
  list.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Function to greet user
function greetUser(name) {
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Hello, ${name}!`;
  greeting.style.color = "green";
  localStorage.setItem("userName", name);
}


// Part 3: Loops


let sampleItems = ["Community", "Respect", "Sharing", "Practicality"];
for (let i = 0; i < sampleItems.length; i++) {
  console.log(`Item ${i + 1}: ${sampleItems[i]}`);
}

let counter = 0;
while (counter < 3) {
  console.log(`Counter is at: ${counter}`);
  counter++;
}


// Part 4: DOM Interactions


//  Interaction 1: Update text content dynamically
greetUser(defaultName);

//  Interaction 2: Add list items to the DOM
addItemsToList(sampleItems);

// Interaction 3: Event listener for button click
document.getElementById("messageBtn").addEventListener("click", showMessage);

//  Interaction 4: Change background color on input focus
document.getElementById("nameInput").addEventListener("focus", () => {
  document.body.style.backgroundColor = "#e8f5e9"; // light green
});
