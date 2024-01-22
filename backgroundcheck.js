// Check if the user has dark mode preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to set background color and text color based on dark mode preference
function setBodyStyles() {
    document.body.style.backgroundColor = prefersDarkMode ? 'black' : 'white';
    document.body.style.color = prefersDarkMode ? 'white' : 'black';
}

// Initial call to set styles
setBodyStyles();

// Listen for changes in dark mode preference and update styles accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setBodyStyles);