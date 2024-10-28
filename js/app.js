const btnDog = document.querySelector('#dog')
const btnCat = document.querySelector('#cat')
const btnFox = document.querySelector('#fox')


function onClickDog(){
    fetch("https://random.dog/woof.json")
    .then((response) =>{
        if (!response.ok){
            throw new Error(`Http error! status = ${response.status}`)
        }else{
            return response.json()
        }
    })
    .then ((returned) =>{
        const returnedImg = returned.url
        const img = document.querySelector(".img")
        img.src =returnedImg
   
    })
    .catch((e) =>{
        console.log("There has been a problem with your fetch operation: " + e.message,
        )
    })
}

function onClickCat(){

}

function onClickFox(){
    fetch("https://randomfox.ca/floof/")
    .then((response) =>{
        if (!response.ok){
            throw new Error(`Http error! status = ${response.status}`)
        }else{
            return response.json()
        }
    })
    .then ((returned) =>{
        const returnedImg = returned.image
        const img = document.querySelector(".img")
        img.src =returnedImg
   
    })
    .catch((e) =>{
        console.log("There has been a problem with your fetch operation: " + e.message,
        )
    })
}

btnDog.addEventListener('click', onClickDog)
btnCat.addEventListener('click', onClickCat)
btnFox.addEventListener('click', onClickFox)


