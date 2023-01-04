let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground (event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor 

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1: 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classlist.remove("dark-theme")
    }
}

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    
    emailjs
        .sendForm(
            `service_d0ues8e`,
            `template_rbxf1yr`,
            event.target,
            `pwNArYUte5QLrRZPu`
        ).then(() => {
            // throw new Error("error")
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert (
                "The email service is temporarily unavailable. Please contact me directly on gauthierarchibald@gmail.com"
            )
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModelOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classlist += " modal--open"
}


function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  }
  changeColor()