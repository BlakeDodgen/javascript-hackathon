// document.querySelector('.container')
var buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonPress);
}
function buttonPress(event) {
    console.log(buttons[i])
}



class Event {
    constructor(name, image, description, button) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.button = button;
        this.createEvent()
    }
    createEvent() {
        let container = document.querySelector('.event')
        // console.log(container)
        const box = document.createElement('div')
        box.classList.add('event__box')
        box.innerHTML += `
                <div class="event__name">${this.name}</div>
                <button class="event__button">${this.button}</button> 
                </div>
        `
        // do more stuff, like assign event listeners
        container.appendChild(box)
    }
}


// const events = [
//     new Event('AA', '', 'blabla', 'button'),
//     new Event('AAbb', '', 'blabla', 'button'),
//     new Event('AAbbcc', '', 'blabla', 'button'),
//     new Event('AAccddss', '', 'blabla', 'button'),
//     new Event('AAdddssffgh', '', 'blabla', 'button'),
// ]



export { Event }


{/* <div class="feature">
<div class="feature__event">${this.name}</div>
<div class="feature__img">${this.image}</div>
<div class="feature__name">${this.name}</div>
<div class="feature__description">${this.description}</div>
<button class="button">${this.button}</button>

</div> */}
