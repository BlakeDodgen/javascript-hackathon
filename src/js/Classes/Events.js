<<<<<<< HEAD
// document.querySelector('.container')
// var buttons = document.querySelectorAll('.button');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', buttonPress);
// }
// function buttonPress(event) {
//     console.log(buttons[i])
// }


=======
const url = 'https://test-api.codingbootcamp.cz/api/ee1ff8bd/events';
let buttons = document.querySelectorAll('.button');
>>>>>>> main

class Event {
        constructor(name, image, description, button) {
                this.name = name;
                this.image = image;
                this.description = description;
                this.button = button;
                this.getAPI();
            }

            
            getAPI = async () => {
                const response = await fetch(url);
                const data = await response.json();
                
                for (let i = 0; i < data.length; i++) {
                    let eventName = data[i].name;
                    let eventDescription = data[i].description;
                    let eventImage = data[i].image_url;
                    
                    const createEvent = () => {
                        let container = document.querySelector('.event')
                        // console.log(container)
                        const box = document.createElement('div')
                        box.classList.add('event__box')
                        box.innerHTML += `
                        <div class="event__name">${eventName}</div>
                        <button class="event__button">${this.button}</button> 
                        </div>
                        `
                        // do more stuff, like assign event listeners
                        container.appendChild(box)
                    }
                    createEvent()
                } 
            }
        } 
            
            export { Event }
            // buttonPress() {
                // for (let i = 0; i < buttons.length; i++) {
            //     buttons[i].addEventListener('click', buttonPress);
             // }
            //     console.log(buttons[i])
            // }