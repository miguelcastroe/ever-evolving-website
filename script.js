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
  const angleStep = (2 * Math.PI) / nodes.length; // Equal angular spacing for nodes around the circle
  const radius = 200;  // Fixed radius for consistent layout

  nodes.forEach((node, index) => {
    const shapeDiv = node.querySelector('.shape');
    const angle = index * angleStep;

    // Randomize shape
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDiv.className = 'shape ' + randomShape;

    // Calculate new position in a circular layout (with fixed radius for consistency)
    const { x, y } = calculatePosition(angle, radius);

    // Smooth movement using GSAP for both nodes and lines
    gsap.to(node, {
      left: `${x - 21}px`, // Subtracting half the size of the shape (42px / 2 = 21px)
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

// Function to evolve nodes over time, initializing with correct positions and lines connected
function startEvolution() {
  evolveNodes();  // Initial call to connect all nodes to the central node at start
  setInterval(evolveNodes, 5000);  // Update every 5 seconds
}

// Initial call to start the evolution
startEvolution();
