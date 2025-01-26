// script.js
function navigateTo(location) {
    const locationInfo = document.getElementById('location-name');
    locationInfo.textContent = location;

    // In a real-world scenario, you could update the map with a highlight or zoom to the location
    alert(`Navigating to: ${location}`);
    window.location.href=`${location}.html`
}
