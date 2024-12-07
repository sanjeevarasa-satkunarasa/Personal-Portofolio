function darkMode() {
    let themeStyle = document.getElementById("theme-style");
    
    // Fix the condition to match the correct file path
    if (themeStyle.getAttribute("href") === "/style/style.css") {
        themeStyle.href = "/style/style-dark.css"; // Change to dark mode CSS
        localStorage.setItem("theme", "dark"); // Save the theme in localStorage
    } else {
        themeStyle.href = "/style/style.css"; // Change to light mode CSS
        localStorage.setItem("theme", "light"); // Save the theme in localStorage
    }
}

// Check for saved theme in localStorage on page load
window.onload = function() {
    let savedTheme = localStorage.getItem("theme");
    let themeStyle = document.getElementById("theme-style");

    if (savedTheme === "dark") {
        themeStyle.href = "/style/style-dark.css"; // Apply dark theme if saved
    } else {
        themeStyle.href = "/style/style.css"; // Apply light theme if saved
    }
}
