var buttons = document.querySelectorAll('.button');
//var displayBox = document.querySelector('.event');

// wire displayGreeting function to each button with .js-say-hi class
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonPress);
}

function buttonPress(event) {
  var buttonNumber = event.target.textContent[event.target.textContent.length - 1];
  displayBox.textContent += 'hello from button ' + buttonNumber + '! ';  
}

/* <button class="button">Say hi 1</button>
<button class="button">Say hi 2</button>
<button class="button">Say hi 3</button>
<button class="button">Say hi 4</button>
<button class="button">Say hi 5</button>
<div class="js-display-greeting"></div> */

export const buttonPress = () => {
    
};

