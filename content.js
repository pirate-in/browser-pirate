// content.js - more reliable version
// Execute immediately, not waiting for DOMContentLoaded
(function() {
    console.log('Extension script loaded for Indeed'); // For debugging
    
    // Create the button element
    const hoverButton = document.createElement('button');
    hoverButton.innerText = 'Auto Apply';
    hoverButton.id = 'indeed-hover-button';
    
    // Apply styles - make it very visible for testing
    hoverButton.style.position = 'fixed';
    hoverButton.style.top = '20px';
    hoverButton.style.right = '20px';
    hoverButton.style.zIndex = '999999'; // Very high z-index
    hoverButton.style.padding = '10px 15px';
    hoverButton.style.backgroundColor = 'red'; // Bright color for testing
    hoverButton.style.color = 'white';
    hoverButton.style.border = '3px solid black'; // Visible border
    hoverButton.style.borderRadius = '4px';
    hoverButton.style.cursor = 'pointer';
    hoverButton.style.fontWeight = 'bold';
    hoverButton.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    // Start visible for debugging
    hoverButton.style.display = 'block';
    
    // Make sure the document body exists before appending
    function addButtonToPage() {
      if (document.body) {
        document.body.appendChild(hoverButton);
        console.log('Button added to page');
      } else {
        // Try again in 100ms if body isn't ready
        setTimeout(addButtonToPage, 100);
      }
    }
    
    addButtonToPage();
    
    // Add mouse tracking after button is added
    function setupMouseTracking() {
      document.addEventListener('mousemove', function(e) {
        // Show the button when the mouse is near the top of the page
        if (e.clientY < 100) {
          hoverButton.style.display = 'block';
        } else {
          // For testing, keep it visible
          // Later you can uncomment this:
          // hoverButton.style.display = 'none';
        }
      });
    }
    
    // Add click functionality
    hoverButton.addEventListener('click', function() {
      alert('Button clicked! It works!');
    });
    
    // Setup mouse tracking after a short delay
    setTimeout(setupMouseTracking, 500);
  })();