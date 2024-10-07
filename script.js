// Function to calculate circular positions around the central node
function calculatePosition(angle, radius) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y };
}

// Function to correctly align lines and evolve nodes
function evolveNodes() {
  const nodes = document.querySelectorAll('.node');
  const shapes = ['circle', 'square', 'hexagon', 'triangle'];
  const angleStep = (2 * Math.PI) / nodes.length; // Equal angular spacing for nodes
  const radius = 200;  // Fixed radius

  nodes.forEach((node, index) => {
    const shapeDiv = node.querySelector('.shape');
    const angle = index * angleStep;

    // Randomize shape
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDiv.className = 'shape ' + randomShape;

    // Calculate new position in a circular layout (fixed radius)
    const { x, y } = calculatePosition(angle, radius);

    // Use GSAP to move the nodes smoothly
    gsap.to(node, {
      left: `${x - 21}px`, // 21px to center the node
      top: `${y - 21}px`,
      duration: 2,
      ease: 'power1.inOut',
      onUpdate: function () {
        const line = document.querySelector(`#line${index + 1}`);
        const centralNodeRect = document.querySelector('.central-node .shape').getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();

        // Calculate line start and end positions based on the center of the nodes
        const lineX1 = centralNodeRect.left + centralNodeRect.width / 2;
        const lineY1 = centralNodeRect.top + centralNodeRect.height / 2;
        const lineX2 = nodeRect.left + nodeRect.width / 2;
        const lineY2 = nodeRect.top + nodeRect.height / 2;

        // Update the line attributes
        line.setAttribute('x1', lineX1);
        line.setAttribute('y1', lineY1);
        line.setAttribute('x2', lineX2);
        line.setAttribute('y2', lineY2);
      }
    });
  });
}

// Start the evolution process
function startEvolution() {
  evolveNodes();  // Initial connection at start
  setInterval(evolveNodes, 5000);  // Update every 5 seconds
}

// Call the startEvolution to initialize everything
startEvolution();
