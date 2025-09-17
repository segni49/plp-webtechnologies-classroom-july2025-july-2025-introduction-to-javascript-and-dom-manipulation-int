
// Part 1: Variables & Conditionals


let userName = "Segni";
let isLoggedIn = true;

if (isLoggedIn) {
  document.getElementById("greeting").textContent = `Hello, ${userName}!`;
} else {
  document.getElementById("greeting").textContent = "Welcome, guest!";
}


// Part 2: Custom Functions


// Function to display a message
function showMessage() {
  alert("Ubuntu means 'I am because we are'");
}

// Function to add items to the list
function addItemsToList(items) {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Clear existing items
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}


// Part 3: Loops


// Example 1: For loop
let sampleItems = ["Community", "Respect", "Sharing", "Practicality"];
for (let i = 0; i < sampleItems.length; i++) {
  console.log(`Item ${i + 1}: ${sampleItems[i]}`);
}

// Example 2: While loop
let counter = 0;
while (counter < 3) {
  console.log(`Counter is at: ${counter}`);
  counter++;
}

// Part 4: DOM Interactions


// Interaction 1: Change text content
document.getElementById("greeting").style.color = "green";

// Interaction 2: Add list items dynamically
addItemsToList(sampleItems);

// Interaction 3: Button click triggers alert (see showMessage function)
