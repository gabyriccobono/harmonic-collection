let waterLevel = 0;  // Initial water level (in percentage)
const glass = document.getElementById('glass');
const water = document.getElementById('water');
const oscar = document.getElementById('oscar');

// Function to fill the glass with water
function fillWater() {
    if (waterLevel < 100) {
        waterLevel += 5; // Increase water level by 5% per click
        water.style.height = `${waterLevel}%`;  // Update water height
    }
    if (waterLevel === 100) {
        // When the glass is full, show the Oscar
        oscar.classList.add('visible');
        glass.style.display = 'none'; // Hide the glass
    }
}

// Add an event listener to fill the water on click
glass.addEventListener('click', fillWater);