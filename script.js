// Function to generate random shape classes and size
function randomizeShapes() {
  const shapes = ['circle', 'square', 'hexagon', 'triangle'];
  const nodes = document.querySelectorAll('.node');
  const greyscaleColors = ['#333', '#666', '#999', '#ccc', '#eee'];

  nodes.forEach(node => {
    // Randomize shape
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Randomize size
    const randomSize = Math.floor(Math.random() * 60) + 40;
    
    // Apply random size
    node.style.width = randomSize + 'px';
    node.style.height = randomSize + 'px';
    
    // Apply random color (greyscale)
    const randomColor = greyscaleColors[Math.floor(Math.random() * greyscaleColors.length)];
    node.style.backgroundColor = randomColor;
    node.style.borderColor = randomColor;

    // Change the shape dynamically
    if (randomShape === 'circle') {
      node.style.borderRadius = '50%';
    } else if (randomShape === 'square') {
      node.style.borderRadius = '0';
    } else if (randomShape === 'hexagon') {
      node.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
    } else if (randomShape === 'triangle') {
      node.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
    }
  });
}

// Function to randomize node positions within the node map
function randomizePositions() {
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    
    // Apply random positioning
    node.style.top = randomTop + '%';
    node.style.left = randomLeft + '%';
  });
}

// Function to evolve the nodes (randomize shapes, colors, positions)
function evolveNodes() {
  randomizeShapes();
  randomizePositions();
}

// Evolve nodes every 5 seconds
setInterval(evolveNodes, 5000);

// Initial evolution when the page loads
evolveNodes();
