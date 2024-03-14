// Function to click the button
function clickButton() {
    // Replace 'your-button-id' with the actual ID of the button you want to click
    var button = document.querySelector('[title="Prejdi na nasledujúcu stranu"]');
    if (button) {
        console.log('Slape to')
        button.click();
    } else {
        console.log('Mame problem zavolaj dicovi')
    }
}

// Interval to click the button every 10 seconds
setInterval(clickButton, 10*60*1000);