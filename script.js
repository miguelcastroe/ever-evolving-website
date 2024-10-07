// Function to randomize shapes, positions, and greyscale colors
function evolveNodes() {
  const nodes = document.querySelectorAll('.node');
  const shapes = ['circle', 'square', 'hexagon', 'triangle'];

  nodes.forEach(node => {
    const shapeDiv = node.querySelector('.shape');
    const label = node.querySelector('.label');

    // Randomize shape
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDiv.className = 'shape ' + randomShape;

    // Randomize position within the node-map container
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    
    // Smooth movement using GSAP
    gsap.to(node, {
      top: randomTop + '%',
      left: randomLeft + '%',
      duration: 2,
      ease: 'power1.inOut'
    });

    // Randomize greyscale color
    const randomGrey = Math.floor(Math.random() * 255);
    shapeDiv.style.backgroundColor = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`;

    // Randomize label text color to stay in greyscale
    const randomTextGrey = Math.floor(Math.random() * 255);
    label.style.color = `rgb(${randomTextGrey}, ${randomTextGrey}, ${randomTextGrey})`;
  });
}

// Function to toggle the info box on node click
function enableNodeInteraction() {
  const nodes = document.querySelectorAll('.node');

  nodes.forEach(node => {
    node.addEventListener('click', function() {
      const infoBox = this.querySelector('.info-box');
      if (infoBox.style.display === 'block') {
        gsap.to(infoBox, { opacity: 0, display: 'none', duration: 0.5 });
      } else {
        gsap.to(infoBox, { opacity: 1, display: 'block', duration: 0.5 });
      }
    });
  });
}

// Pan and Zoom functionality using Panzoom
const nodeMap = document.querySelector('.node-map');
const panzoomInstance = panzoom(nodeMap, {
  zoomSpeed: 0.065,
  maxZoom: 3,
  minZoom: 0.5,
  bounds: true,
  boundsPadding: 0.1
});

// Function to evolve nodes over time
function startEvolution() {
  evolveNodes();
  setInterval(evolveNodes, 5000);
}

// Initialize everything
enableNodeInteraction();
startEvolution();
