// document.querySelector('.container')

class Event {
    constructor(name, image, description, button) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.button = button;
        this.createEvent()
    }
    createEvent() {
        let container = document.querySelector('.container')
        console.log(container)
        container.innerHTML += `
        <div class="eventContainer">

        <div class="feature">
            <div class="feature__event">${this.name}</div>
            <div class="feature__img">${this.image}</div>
            <div class="feature__name">${this.name}</div>
            <div class="feature__description">${this.description}</div>
            <button class="button">${this.button}</button>

        </div>

        <div class="event">
            <div class="event__name">${this.name}</div>
            <button class="event__button">${this.button}</button>
        </div>
    </div>
        `
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

