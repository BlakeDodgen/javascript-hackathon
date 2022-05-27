var buttons = document.querySelectorAll('.js-say-hi');
var displayBox = document.querySelector('.js-display-greeting');

// wire displayGreeting function to each button with .js-say-hi class
for (var i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', displayGreeting)
}

function displayGreeting(event) {
  var buttonNumber = event.target.textContent[event.target.textContent.length - 1];
  displayBox.textContent += 'hello from button ' + buttonNumber + '! ';  
}

{/* <button class="js-say-hi">Say hi 1</button>
<button class="js-say-hi">Say hi 2</button>
<button class="js-say-hi">Say hi 3</button>
<button class="js-say-hi">Say hi 4</button>
<button class="js-say-hi">Say hi 5</button>
<div class="js-display-greeting"></div> */}