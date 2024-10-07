// Function to randomize the color of grid items
function randomizeColor() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    item.style.backgroundColor = randomColor;
  });
}

// Function to randomize the position of grid items
function randomizeGrid() {
  const container = document.querySelector('.grid-container');
  const gridItems = Array.from(container.children);
  
  // Shuffle grid items
  gridItems.sort(() => Math.random() - 0.5);
  
  // Clear the container and re-append shuffled items
  container.innerHTML = '';
  gridItems.forEach(item => {
    container.appendChild(item);
  });
}

// Add click event listeners to each grid item for evolution
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    randomizeColor();
    randomizeGrid();
  });
});

// Automatically evolve the grid every 5 seconds
setInterval(() => {
  randomizeColor();
  randomizeGrid();
}, 5000);

// Load interaction count from localStorage
let interactionCount = localStorage.getItem('interactionCount') || 0;

// Function to update the interaction count and store it
function updateInteractionCount() {
  interactionCount++;
  localStorage.setItem('interactionCount', interactionCount);
  document.querySelector('body').style.backgroundColor = interactionCount % 2 === 0 ? '#f0f0f0' : '#1a1a1a'; // change background color based on interactions
}

// Add click event listeners to each grid item for evolution and interaction tracking
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    randomizeColor();
    randomizeGrid();
    updateInteractionCount();  // Track interactions
  });
});

// Randomize functions (from the earlier example)
function randomizeColor() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    item.style.backgroundColor = randomColor;
  });
}

function randomizeGrid() {
  const container = document.querySelector('.grid-container');
  const gridItems = Array.from(container.children);
  gridItems.sort(() => Math.random() - 0.5);  // Shuffle grid items
  container.innerHTML = '';
  gridItems.forEach(item => {
    container.appendChild(item);
  });
}
