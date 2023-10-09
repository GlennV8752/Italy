// Open the default tab when the page loads
document.getElementById('Tab1').classList.add('active');

// Function to open tabs
function openTab(tabName) {
    var tabcontent = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}




