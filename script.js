// Function to randomize shapes, positions, and greyscale colors
function evolveNodes() {
  const nodes = document.querySelectorAll('.node');
  const shapes = ['circle', 'square', 'hexagon', 'triangle'];

  nodes.forEach(node => {
    const shapeDiv = node.querySelector('.shape');
    const label = node.querySelector('.label');

    // Randomize shape
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDiv.className = 'shape ' + randomShape;  // Add the shape class dynamically

    // Randomize position within the node-map container
    const randomTop = Math.floor(Math.random() * 80) + 10;  // Range between 10% and 90% top
    const randomLeft = Math.floor(Math.random() * 80) + 10; // Range between 10% and 90% left
    node.style.top = randomTop + '%';
    node.style.left = randomLeft + '%';

    // Randomize greyscale color
    const randomGrey = Math.floor(Math.random() * 255);
    shapeDiv.style.backgroundColor = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`;

    // Randomize label text color to stay in greyscale
    const randomTextGrey = Math.floor(Math.random() * 255);
    label.style.color = `rgb(${randomTextGrey}, ${randomTextGrey}, ${randomTextGrey})`;
  });
}

// Evolve nodes every 5 seconds
setInterval(evolveNodes, 5000);

// Initial call to start the evolution
evolveNodes();
