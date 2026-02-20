const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const hiMessage = document.querySelector('#welcome') // get the welcome div

if (isMorning) 
  {
  hiMessage.textContent = "Good morning!";
} 

else if (isAfternoon)
   {
  hiMessage.textContent = "Good afternoon!";
} 
else if (isEvening)
  {
  hiMessage.textContent = "Good evening!";
  }

  localStorage.setItem("It's a secret to everybody", "I am poor student during the day,but during the night I am Batman!") ;
  const secret = localStorage.getItem("It's a secret to everybody");
  if (secret) {
    console.log(secret);
  } else {
    console.log("No secret found in localStorage.");
  }

  // Preload images for the carousel
  const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}
showImages()


const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})
prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})  
setInterval(() => {
    currentImage++
    showImages()
}, 5000)


